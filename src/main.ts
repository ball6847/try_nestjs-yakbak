// tslint:disable:no-console
import { NestFactory } from '@nestjs/core';
import * as path from 'path';
import { AppModule } from './app.module';
import { createYakbakApp } from './yakbak-nestjs';

// TODO: port should be configurable via command line args

const yakbak = createYakbakApp({
  tape: 'default',
  baseDir: path.resolve('tapes'),
});

yakbak.listen(3000, () => {
  console.log('Yakbak started on localhost:3000');
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}

bootstrap();
