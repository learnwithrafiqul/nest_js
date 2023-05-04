import { PartialType } from '@nestjs/mapped-types';
import { CreateWschatDto } from './create-wschat.dto';

export class UpdateWschatDto extends PartialType(CreateWschatDto) {
  id: number;
}
