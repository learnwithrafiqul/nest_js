import { OnModuleInit } from '@nestjs/common';
import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
} from '@nestjs/websockets';
import { Server } from 'socket.io';


@WebSocketGateway()
export class MyGateway implements OnModuleInit {
    @WebSocketServer()
    server: Server;

    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log("socket--->", socket.id);
            console.log("Connected")
        });
    }

    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody() message: string) {
        console.log(message);
        this.server.emit('onMessage', {
            message: message
        });
    }
}
