"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosController = void 0;
const common_1 = require("@nestjs/common");
const Todo_dto_1 = require("../../dtos/Todo.dto");
const auth_guard_1 = require("../../guards/auth/auth.guard");
const validate_create_todo_pipe_1 = require("../../pipes/validate-create-todo/validate-create-todo.pipe");
const todos_service_1 = require("../../services/todos/todos.service");
let TodosController = class TodosController {
    constructor(todosService) {
        this.todosService = todosService;
    }
    getAllTodos() {
        return this.todosService.getAllTodos();
    }
    createTodo(todoData) {
        return this.todosService.createTodo(todoData);
    }
    getSingleTodo(id) {
        const todo = this.todosService.getSingleTodo(id);
        if (!todo) {
            throw new common_1.HttpException('Todo not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return todo;
    }
};
__decorate([
    (0, common_1.Get)('get-all-todos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "getAllTodos", null);
__decorate([
    (0, common_1.Post)('create-todo'),
    __param(0, (0, common_1.Body)(validate_create_todo_pipe_1.ValidateCreateTodoPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Todo_dto_1.TodoDto]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "createTodo", null);
__decorate([
    (0, common_1.Get)('get-single-todo/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "getSingleTodo", null);
TodosController = __decorate([
    (0, common_1.Controller)('todos'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [todos_service_1.TodosService])
], TodosController);
exports.TodosController = TodosController;
//# sourceMappingURL=todos.controller.js.map