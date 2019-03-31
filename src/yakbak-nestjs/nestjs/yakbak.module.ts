import { Module } from '@nestjs/common';
import { config as yakbakConfig } from '../app';
import { YAKBAK_CONFIG } from './tokens';
import { YakbakController } from './yakbak.controller';

@Module({
  controllers: [YakbakController],
  providers: [
    {
      provide: YAKBAK_CONFIG,
      useValue: yakbakConfig,
    },
  ],
})
export class YakbakModule {}
