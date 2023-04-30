import { ApiProperty } from "@nestjs/swagger";

export class CreateCatDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    breed: string;
}

export class User {
    @ApiProperty({
        required: true,
    })
    username: string;

    @ApiProperty({
        required: true,
    })
    email: string;
}
