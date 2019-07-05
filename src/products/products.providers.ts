import { Connection } from 'mongoose';
import { ProductSchema } from './schemas/product.schema';

// Create our models and offer them via dependency injection
export const productsProviders = [
  {
    provide: 'PRODUCT_MODEL',
    useFactory: (connection: Connection) => connection.model('Product', ProductSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];