import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express';

import { join } from 'path';

import * as nunjucks from 'nunjucks';
async function bootstrap() {
 
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );



  app.enableCors();
  
  await app.listen(3000);
}
bootstrap();
