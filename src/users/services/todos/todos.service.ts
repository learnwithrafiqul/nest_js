import { Injectable } from '@nestjs/common';
import { TodoType } from 'src/users/dtos/Todo.dto';

@Injectable()
export class TodosService {
  private todos = [
    {
      title: 'Todo 1',
      content: 'Content 1',
    },
    {
      title: 'Todo 2',
      content: 'Content 2',
    },
  ];
  getAllTodos() {
    return this.todos;
  }

  createTodo(todo: TodoType) {
    this.todos.push(todo);
    return this.todos;
  }

  getSingleTodo(id: number) {
    return this.todos[id];
  }

}
