import { Module } from '@nestjs/common';
import { YakbakModule } from './yakbak-nestjs';

@Module({
  imports: [YakbakModule],
})
export class AppModule {}
