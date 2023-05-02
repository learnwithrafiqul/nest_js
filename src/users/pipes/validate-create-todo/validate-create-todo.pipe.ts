import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { TodoDto } from 'src/users/dtos/Todo.dto';

@Injectable()
export class ValidateCreateTodoPipe implements PipeTransform {
  transform(value: TodoDto, metadata: ArgumentMetadata) {
    console.log("ValidateCreateTodoPipe")


    value.title = value.title.trim();
    value.content = value.content.trim();


    console.log("value", value);
    console.log("metadata", metadata);
    return value;
  }
}
