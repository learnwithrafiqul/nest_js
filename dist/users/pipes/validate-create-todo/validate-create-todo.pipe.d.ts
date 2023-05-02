import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { TodoDto } from 'src/users/dtos/Todo.dto';
export declare class ValidateCreateTodoPipe implements PipeTransform {
    transform(value: TodoDto, metadata: ArgumentMetadata): TodoDto;
}
