import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { MerchantModule } from './merchant/merchant.module';

@Module({
  imports: [UserModule, ProductModule, MerchantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
