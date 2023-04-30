import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateCatDto, User } from 'src/users/dtos/Test.dto';
export declare class UsersController {
    getUsers(): {
        id: number;
        name: string;
    }[];
    getPosts(): {
        id: number;
        user: number;
        title: string;
    }[];
    getSinglePost(id: number): {
        id: number;
        user: number;
        title: string;
    };
    getComments(id: number): {
        id: number;
        user: number;
        title: string;
    }[];
    create(createCatDto: CreateCatDto): Promise<CreateCatDto>;
    createUser(user: User): {
        message: string;
    };
    testPost(request: Request, response: Response): void;
    createUserDto(userData: CreateUserDto): {
        message: string;
    };
    getUserById(id: number): {
        id: number;
        name: string;
    };
    multipleParams(id: number, name: string): {
        id: number;
        name: string;
    };
}
