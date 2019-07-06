import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ProductsModule } from 'dist/products/products.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setup Swagger for products API
  const options = new DocumentBuilder()
      .setTitle('Proxima NestJS Example')
      .setDescription('API for CRUD operations on products')
      .setVersion('1.0')
      .addTag('products')
      .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
