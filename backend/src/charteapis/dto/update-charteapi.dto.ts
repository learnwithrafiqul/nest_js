import { PartialType } from '@nestjs/mapped-types';
import { CreateCharteapiDto } from './create-charteapi.dto';

export class UpdateCharteapiDto extends PartialType(CreateCharteapiDto) {}
