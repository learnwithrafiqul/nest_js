import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';
import { CreateWschatDto } from './dto/create-wschat.dto';
import { UpdateWschatDto } from './dto/update-wschat.dto';

@Injectable()
export class WschatService {
  public socket: Server = null;

  create(createWschatDto: CreateWschatDto) {
    return 'This action adds a new wschat';
  }

  findAll() {
    return `This action returns all wschat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wschat`;
  }

  update(id: number, updateWschatDto: UpdateWschatDto) {
    return `This action updates a #${id} wschat`;
  }

  remove(id: number) {
    return `This action removes a #${id} wschat`;
  }
}
