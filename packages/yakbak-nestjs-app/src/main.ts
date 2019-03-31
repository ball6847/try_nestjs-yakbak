// tslint:disable:no-console
import { createYakbakApp } from '@ball6847/yakbak-nestjs';
import { NestFactory } from '@nestjs/core';
import * as path from 'path';
import { AppModule } from './app.module';

// TODO: port should be configurable via command line args

const yakbak = createYakbakApp({
  tape: 'default',
  upstream: 'https://jsonplaceholder.typicode.com',
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
