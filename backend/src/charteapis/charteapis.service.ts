import { Injectable } from '@nestjs/common';
import { CreateCharteapiDto } from './dto/create-charteapi.dto';
import { UpdateCharteapiDto } from './dto/update-charteapi.dto';

@Injectable()
export class CharteapisService {
  create(createCharteapiDto: CreateCharteapiDto) {
    return 'This action adds a new charteapi';
  }

  findAll() {
    return `This action returns all charteapis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} charteapi`;
  }

  update(id: number, updateCharteapiDto: UpdateCharteapiDto) {
    return `This action updates a #${id} charteapi`;
  }

  remove(id: number) {
    return `This action removes a #${id} charteapi`;
  }
}
