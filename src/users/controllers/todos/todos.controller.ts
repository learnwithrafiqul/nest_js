import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { TodoDto } from 'src/users/dtos/Todo.dto';
import { TodosService } from 'src/users/services/todos/todos.service';

@Controller('todos')
export class TodosController {
    constructor(private todosService: TodosService) { }

    @Get('get-all-todos')
    getAllTodos() {
        return this.todosService.getAllTodos();
    }

    @Post('create-todo')
    createTodo(@Body() todoData: TodoDto) {
        return this.todosService.createTodo(todoData);
    }

    @Get('get-single-todo/:id')
    getSingleTodo(@Param('id') id: number) {
        const todo = this.todosService.getSingleTodo(id);
        if (!todo) {
            throw new HttpException('Todo not found', HttpStatus.BAD_REQUEST);
        }
        return todo;
    }

}
