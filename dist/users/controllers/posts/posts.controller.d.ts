import { PostDto } from 'src/users/dtos/Post.dto';
export declare class PostsController {
    createPost(post: PostDto): PostDto;
    getPostById(id: number): {
        message: string;
    };
    updatePost(id: number, post: PostDto): PostDto;
}
