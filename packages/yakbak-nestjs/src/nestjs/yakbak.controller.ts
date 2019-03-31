import { Controller, Get, Inject, Query } from '@nestjs/common';
import { YakbakConfig } from '../config';
import { YAKBAK_CONFIG } from './tokens';

@Controller('yakbak')
export class YakbakController {
  constructor(@Inject(YAKBAK_CONFIG) private readonly yakbakConfig: YakbakConfig) {}

  @Get('getTapeSession')
  getTapeSession() {
    return {
      name: this.yakbakConfig.tape,
    };
  }

  // TODO: validate tape name
  @Get('setTapeSession')
  setTapeSession(@Query('name') name: string) {
    this.yakbakConfig.tape = name;
    return this.getTapeSession();
  }
}
