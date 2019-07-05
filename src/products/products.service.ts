import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
    constructor(@Inject('PRODUCT_MODEL') private readonly productModel: Model<Product>) {}

    // Returns a list of products
    async getAll(): Promise<Product[]> {
        throw new Error("Not implemented!");
    }

    // Creates a product
    async create(productDto: ProductDto): Promise<Product> {
        throw new Error("Not implemented!");
    }

    // Returns a product with the specified id
    async get(id: string): Promise<Product> {
        throw new Error("Not implemented!");
    }

    // Removes the product with the specified id
    async delete(id: string): Promise<Product> {
        throw new Error("Not implemented!");
    }

    // Updates the product with the specified id
    async update(id: string): Promise<Product> {
        throw new Error("Not implemented!");
    }
}
