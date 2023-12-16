import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join, resolve } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  )
  app.useStaticAssets(join(__dirname, '..' , 'src/public'));
  app.setBaseViewsDir(join(__dirname, '..' , 'src/views'));
  app.setViewEngine('hbs');
  await app.listen(3000);
}
bootstrap();
