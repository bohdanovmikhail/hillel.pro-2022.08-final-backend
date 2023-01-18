import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MessagesGateway } from './api/messages.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MessagesGateway],
})
export class AppModule {}
