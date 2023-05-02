import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { TodoDto } from 'src/users/dtos/Todo.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateTodoPipe } from 'src/users/pipes/validate-create-todo/validate-create-todo.pipe';
import { TodosService } from 'src/users/services/todos/todos.service';

@Controller('todos')
@UseGuards(AuthGuard)
export class TodosController {
    constructor(private todosService: TodosService) { }

    @Get('get-all-todos')
    getAllTodos() {
        return this.todosService.getAllTodos();
    }

    @Post('create-todo')
    createTodo(@Body(ValidateCreateTodoPipe) todoData: TodoDto) {
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
