import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: '*' })
export class MessagesGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('send_message')
  async listenForMessages(
    @MessageBody() content: string,
    @ConnectedSocket() socket: Socket,
  ) {
    console.log('content', content);
    const message = { text: content };

    // const author = await this.chatService.getUserFromSocket(socket);
    // const message = await this.chatService.saveMessage(content, author);

    this.server.sockets.emit('receive_message', message);

    return message;
  }

  @SubscribeMessage('request_all_messages')
  async requestAllMessages(@ConnectedSocket() socket: Socket) {
    // await this.chatService.getUserFromSocket(socket);
    // const messages = await this.chatService.getAllMessages();

    // socket.emit('send_all_messages', messages);

    return Promise.resolve();
  }
}
