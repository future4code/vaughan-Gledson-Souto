import { IPostData } from "../model/interfacePostData";
import { Post } from "../model/Post";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export default class PostData extends BaseDatabase implements IPostData {
    TABLE_NAME = "labook_posts";
    insert = async(
        post: Post
        ): Promise<Post> => {
            try{
                await this
                .connection(this.TABLE_NAME)
                .insert({
                    id: post.id,
                    photo: post.photo,
                    description: post.description,
                    date: post.date,
                    type_post: post.type_post,
                });
                return post;
            }catch(e){
                if (e instanceof Error) {
                    throw new Error(e.message)
                } else {
                    throw new Error("Erro do banco!")
                }
            }
    }
    findPostById = async(
        id: string
        ): Promise<Post> => {
            try{
                const result = await this.connection(this.TABLE_NAME)
                    .select("*")
                    .where({id});
                return result[0];
            }catch(e){
                if (e instanceof Error) {
                    throw new Error(e.message)
                } else {
                    throw new Error("Erro do banco!")
                }
            }
    }
}