import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    constructor(@Inject('PRODUCT_MODEL') private readonly productModel: Model<Product>) {}

    // Returns a list of products
    async getAll(): Promise<Product[]> {
        return await this.productModel.find().exec();
    }

    // Creates a product
    async create(productDto: CreateProductDto): Promise<Product> {
        const newProduct = new this.productModel(productDto);
        return await newProduct.save();
    }

    // Returns a product with the specified id
    async get(id: string): Promise<Product> {
        return await this.productModel.findById(id).exec();
    }

    // Removes the product with the specified id
    async delete(id: string): Promise<Product> {
        return await this.productModel.findByIdAndDelete(id).exec();
    }

    // Updates the product with the specified id
    async update(id: string, productDto: UpdateProductDto): Promise<Product> {
        return await this.productModel.findByIdAndUpdate(id, productDto, { new: true }).exec();
    }
}
