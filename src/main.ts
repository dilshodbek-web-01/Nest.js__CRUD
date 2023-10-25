import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { appConfig } from '@config';
import { App } from './app';

setImmediate(async () => {
  const app = await NestFactory.create(App, {
    cors: {
      origin: '*',
    },
  });
  
  app.useGlobalPipes(new ValidationPipe());

  const swaggerOptions = new DocumentBuilder()
  .setTitle('Book')
  .setDescription('Application for book shop')
  .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api', app, document);


  await app.listen(appConfig.port);
});
