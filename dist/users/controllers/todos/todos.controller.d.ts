import { TodoDto } from 'src/users/dtos/Todo.dto';
import { TodosService } from 'src/users/services/todos/todos.service';
export declare class TodosController {
    private todosService;
    constructor(todosService: TodosService);
    getAllTodos(): {
        title: string;
        content: string;
    }[];
    createTodo(todoData: TodoDto): {
        title: string;
        content: string;
    }[];
    getSingleTodo(id: number): {
        title: string;
        content: string;
    };
}
