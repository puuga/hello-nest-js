import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsController } from './controller/cats/cats.controller';

import { LoggerMiddleware } from './middleware/logger.middleware'

@Module({
  imports: [],
  controllers: [AppController, CatsController, Cats.V1Controller],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes('*');
  }
}
