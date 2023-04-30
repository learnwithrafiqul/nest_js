import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateCatDto, User } from 'src/users/dtos/Test.dto';


@Controller('users')
export class UsersController {
    @Get('users')
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

    @Get('posts')
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
    @Get('post/:id')
    getSinglePost(@Param('id') id: number) {


        return {
            id: id,
            user: 1,
            title: 'Post 1',
        };
    }

    @Get("post/:id/comments")
    getComments(@Param('id') id: number) {
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
        ]
    }


    @Post('createCatDto')
    async create(@Body() createCatDto: CreateCatDto) {
        return createCatDto;
    }


    @Post('create-user')
    createUser(@Body() user: User) {
        return {
            "message": "User created"
        };
    }


    @Post("test-post")
    testPost(@Req() request: Request, @Res() response: Response) {

        console.log(request.body);

        response.json({
            "message": "Post request tested"
        })
    }

    @Post('create-user-dto')
    createUserDto(@Body() userData: CreateUserDto) {
        console.log("create-user-dto", userData);
        return {
            "message": "DTO User created"
        }
    }



}
