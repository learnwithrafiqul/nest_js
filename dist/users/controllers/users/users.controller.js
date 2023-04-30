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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const CreateUser_dto_1 = require("../../dtos/CreateUser.dto");
const Test_dto_1 = require("../../dtos/Test.dto");
let UsersController = class UsersController {
    getUsers() {
        return [
            {
                id: 1,
                name: 'John',
            },
            {
                id: 2,
                name: 'Jane',
            }
        ];
    }
    getPosts() {
        return [
            {
                id: 1,
                user: 1,
                title: 'Post 1',
            },
            {
                id: 2,
                user: 2,
                title: 'Post 2',
            }
        ];
    }
    getSinglePost(id) {
        return {
            id: id,
            user: 1,
            title: 'Post 1',
        };
    }
    getComments(id) {
        return [
            {
                id: 1,
                user: 1,
                title: 'Comment 1',
            },
            {
                id: 2,
                user: 2,
                title: 'Comment 2',
            }
        ];
    }
    async create(createCatDto) {
        return createCatDto;
    }
    createUser(user) {
        return {
            "message": "User created"
        };
    }
    testPost(request, response) {
        console.log(request.body);
        response.json({
            "message": "Post request tested"
        });
    }
    createUserDto(userData) {
        console.log("create-user-dto", userData);
        return {
            "message": "DTO User created"
        };
    }
};
__decorate([
    (0, common_1.Get)('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('posts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getPosts", null);
__decorate([
    (0, common_1.Get)('post/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getSinglePost", null);
__decorate([
    (0, common_1.Get)("post/:id/comments"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getComments", null);
__decorate([
    (0, common_1.Post)('createCatDto'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Test_dto_1.CreateCatDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('create-user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Test_dto_1.User]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)("test-post"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "testPost", null);
__decorate([
    (0, common_1.Post)('create-user-dto'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUserDto", null);
UsersController = __decorate([
    (0, common_1.Controller)('users')
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map