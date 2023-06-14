import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const PORT = process.env.NEST_PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1');
  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
bootstrap();
