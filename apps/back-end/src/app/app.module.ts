import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';
import { LoggerMiddleware } from '../middleware/logger-middleware.middleware';
import { UsersController } from '../users/users.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/projetinho'),
            UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(LoggerMiddleware)
      .forRoutes(UsersController)
  }
}
