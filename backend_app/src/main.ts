import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //convertion of types
      whitelist: true, // Remove properties not present in DTO
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(9000);
}
bootstrap();
