import { Controller, Get } from '@nestjs/common';
import { MerchantService } from './merchant.service';

@Controller('api/merchant')
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}
  @Get()
  get(): string {
    return 'ok';
  }
}
