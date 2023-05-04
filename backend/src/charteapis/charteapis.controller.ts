import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { WschatService } from 'src/wschat/wschat.service';
import { CharteapisService } from './charteapis.service';
import { CreateCharteapiDto } from './dto/create-charteapi.dto';
import { UpdateCharteapiDto } from './dto/update-charteapi.dto';

@Controller('charteapis')
export class CharteapisController {
  constructor(
    private readonly charteapisService: CharteapisService,
    private readonly wschatService: WschatService,
  ) {}

  @Post()
  create(@Body() createCharteapiDto: CreateCharteapiDto) {
    return this.charteapisService.create(createCharteapiDto);
  }

  @Get()
  findAll() {
    this.wschatService.socket.emit('charteapis', this.charteapisService.findAll());

    return this.charteapisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.charteapisService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCharteapiDto: UpdateCharteapiDto,
  ) {
    return this.charteapisService.update(+id, updateCharteapiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charteapisService.remove(+id);
  }
}
