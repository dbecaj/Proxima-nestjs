import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';

/*
// Returns a list of products
router.get('/products', productController.productsReadList);

// Creates a product
router.post('/product', productController.productCreatePost);

// Returns a product with the specified id
router.get('/product/:id', productController.productReadGet);

// Removes the product with the specified id
router.delete('/product/:id', productController.productDelete);

// Updates the product with the specified id
router.put('/product/:id', productController.productUpdatePost);
*/

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
    async create(@Body() productDto: ProductDto) {
        this.productsService.create(productDto);
    }

    @Get(":id")
    async get(@Param("id") id): Promise<Product> {
        return this.productsService.get(id);
    }

    @Delete(":id")
    async delete(@Param("id") id): Promise<Product> {
        return this.productsService.delete(id);
    }

    @Put(":id")
    async update(@Param("id") id): Promise<Product> {
        return this.update(id);
    }
}
