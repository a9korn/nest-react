import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = +process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(port);
  return port;
}

bootstrap().then((port) => {
  console.log(`start: http://127.0.0.1:${port}`);
});
