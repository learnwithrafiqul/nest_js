import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    required: true,
    type: String,
  })
  username: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  password: string;
}
