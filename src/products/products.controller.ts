import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    // Returns a list of products
    @Get()
    async getAll(): Promise<Product[]> {
        return this.productsService.getAll();
    }

    // Creates a product
    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() productDto: ProductDto) {
        return this.productsService.create(productDto);
    }

    // Returns a product with the specified id
    @Get(":id")
    async get(@Param("id") id): Promise<Product> {
        return this.productsService.get(id);
    }

    // Removes the product with the specified id
    @Delete(":id")
    async delete(@Param("id") id): Promise<Product> {
        return this.productsService.delete(id);
    }

    // Updates the product with the specified id
    @Put(":id")
    async update(@Param("id") id): Promise<Product> {
        return this.update(id);
    }
}
