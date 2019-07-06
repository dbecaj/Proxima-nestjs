import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto'
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';
import { IdParam } from './validation/IdParam';
import { ApiOkResponse, ApiUseTags, ApiCreatedResponse, ApiNotFoundResponse, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('products')
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    // Returns a list of products
    @Get()
    @ApiOperation({ title: 'Get all products' })
    @ApiOkResponse({ description: 'The products where successfuly retrieved.' })
    async getAll(): Promise<Product[]> {
        return this.productsService.getAll();
    }

    // Creates a product
    @Post()
    @ApiOperation({ title: 'Create a product' })
    @ApiCreatedResponse({ description: 'The product was successfuly created.' })
    @UsePipes(new ValidationPipe())
    async create(@Body() productDto: CreateProductDto) {
        return this.productsService.create(productDto);
    }

    // Returns a product with the specified id
    @Get(":id")
    @ApiOperation({ title: 'Get the product with the specified {id}' })
    @ApiOkResponse({ description: 'The product was successfuly retrieved.' })
    @ApiNotFoundResponse({ description: 'Product with the {id} does not exist!' })
    async get(@Param() params: IdParam): Promise<Product> {
        var product = await this.productsService.get(params.id);
        if (!product) {
            throw new NotFoundException(`Product with the id ${params.id} does not exist!`)
        }

        return product;
    }

    // Removes the product with the specified id
    @Delete(":id")
    @ApiOperation({ title: 'Remove the product with the specified {id}' })
    @ApiOkResponse({ description: 'The product was successfuly deleted.' })
    @ApiNotFoundResponse({ description: 'Product with the {id} does not exist!' })
    async delete(@Param() params: IdParam): Promise<Product> {
        var product = await this.productsService.delete(params.id);
        if (!product) {
            throw new NotFoundException(`Product with the id ${params.id} does not exist!`)
        }

        return product;
    }

    // Updates the product with the specified id
    @Put(":id")
    @ApiOperation({ title: 'Update the product with the specified {id}' })
    @ApiOkResponse({ description: 'The product was successfuly updated.' })
    @ApiNotFoundResponse({ description: 'Product with the {id} does not exist!' })
    async update(@Body() productDto: UpdateProductDto, @Param() params: IdParam): Promise<Product> {
        var product = await this.productsService.update(params.id, productDto);
        if (!product) {
            throw new NotFoundException(`Product with the id ${params.id} does not exist!`)
        }

        return product;
    }
}
