import { Logger } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { CreateWschatDto } from './dto/create-wschat.dto';
import { UpdateWschatDto } from './dto/update-wschat.dto';
import { WschatService } from './wschat.service';

@WebSocketGateway()
export class WschatGateway implements OnGatewayInit {
  constructor(private readonly wschatService: WschatService) {}

  @WebSocketServer() public server: Server;
  private logger: Logger = new Logger('AppGateway');

  afterInit(server: Server) {
    this.wschatService.socket = server;
  }
  @SubscribeMessage('createWschat')
  create(@MessageBody() createWschatDto: CreateWschatDto) {
    return this.wschatService.create(createWschatDto);
  }

  @SubscribeMessage('findAllWschat')
  findAll() {
    return this.wschatService.findAll();
  }

  @SubscribeMessage('findOneWschat')
  findOne(@MessageBody() id: number) {
    return this.wschatService.findOne(id);
  }

  @SubscribeMessage('updateWschat')
  update(@MessageBody() updateWschatDto: UpdateWschatDto) {
    return this.wschatService.update(updateWschatDto.id, updateWschatDto);
  }

  @SubscribeMessage('removeWschat')
  remove(@MessageBody() id: number) {
    return this.wschatService.remove(id);
  }
}
