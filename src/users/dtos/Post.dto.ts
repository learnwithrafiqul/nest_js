import { IsEmail, IsNotEmpty } from "class-validator";

export class PostDto {  // DTO = Data Transfer Objects
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    content: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}