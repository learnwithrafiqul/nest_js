// export class CreatePostDto {
//   title: string;
//   content: string;
// }

import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    type: String,
    minimum: 3,
    maximum: 50,
    required: true,
  })
  title: string;

  @ApiProperty({
    type: String,
    minimum: 3,
    maximum: 50,
    required: true,
  })
  content: string;
}
