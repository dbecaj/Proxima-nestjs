import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto'
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';
import { IdParam } from './validation/IdParam';

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
    async create(@Body() productDto: CreateProductDto) {
        return this.productsService.create(productDto);
    }

    // Returns a product with the specified id
    @Get(":id")
    async get(@Param() params: IdParam): Promise<Product> {
        var product = await this.productsService.get(params.id);
        if (!product) {
            throw new NotFoundException(`Product with the id ${params.id} does not exist!`)
        }

        return product;
    }

    // Removes the product with the specified id
    @Delete(":id")
    async delete(@Param() params: IdParam): Promise<Product> {
        var product = await this.productsService.delete(params.id);
        if (!product) {
            throw new NotFoundException(`Product with the id ${params.id} does not exist!`)
        }

        return product;
    }

    // Updates the product with the specified id
    @Put(":id")
    async update(@Body() productDto: UpdateProductDto, @Param() params: IdParam): Promise<Product> {
        var product = await this.productsService.update(params.id, productDto);
        if (!product) {
            throw new NotFoundException(`Product with the id ${params.id} does not exist!`)
        }

        return product;
    }
}
