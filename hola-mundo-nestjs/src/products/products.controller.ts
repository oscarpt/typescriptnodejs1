import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {

@Get()
getHelloInProducts(): string {
          return "Estamos en productos!!!";
}


          @Get('hot')
          getSpecialProducts(): string {
                    return "Te vamos a mostrar los productos más calientes!!";
          }
}
