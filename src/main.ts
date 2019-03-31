// tslint:disable:no-console
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import yakbak from './yakbak';

yakbak.listen(3000, () => {
  console.log('Proxy started on localhost:3000');
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}

bootstrap();
