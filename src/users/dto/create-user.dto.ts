import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    required: true,
  })
  username: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  password: string;
}
