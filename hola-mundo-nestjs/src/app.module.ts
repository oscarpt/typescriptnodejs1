import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { Products2Controller } from './modules/venta/controllers/products/products.controller';
import { Products3Controller } from './modules/compra/controllers/products/products.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, Products2Controller, Products3Controller],
  providers: [AppService],
})
export class AppModule {}
