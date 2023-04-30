import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { PostDto } from 'src/users/dtos/Post.dto';

@Controller('posts')
export class PostsController {

    @Post('create-post')
    createPost(@Body() post: PostDto) {
        return post;
    }

    @Get(':id')
    getPostById(@Param('id', ParseIntPipe) id: number) {
        console.log(
            `The id of the post is ${id}`
        );
        return {
            message: `The id of the post is ${id}`
        }

    }

    @Put("update-post/:id")
    updatePost(
        @Param('id', ParseIntPipe) id: number,
        @Body() post: PostDto
    ) {
        console.log("The id of the post is " + id);
        console.log("The post is " + JSON.stringify(post));


        return post
    }


}
