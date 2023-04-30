import { IsNotEmpty } from "class-validator";

export class TodoDto {  // DTO = Data Transfer Objects
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    content: string;

}


export type TodoType  = {
    title: string;
    content: string;
}