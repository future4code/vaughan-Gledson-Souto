import { Post } from "./Post";

export interface IPostData {
    insert(post: Post): Promise<Post>
    findPostById(id: string): Promise<Post>
}