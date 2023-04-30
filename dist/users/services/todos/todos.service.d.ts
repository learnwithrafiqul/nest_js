import { TodoType } from 'src/users/dtos/Todo.dto';
export declare class TodosService {
    private todos;
    getAllTodos(): {
        title: string;
        content: string;
    }[];
    createTodo(todo: TodoType): {
        title: string;
        content: string;
    }[];
    getSingleTodo(id: number): {
        title: string;
        content: string;
    };
}
