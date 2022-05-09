import { IPostData } from "../model/interfacePostData";
import { Post } from "../model/Post";
import { IdGenerator } from "../services/IdGenerator";
import { postInputDTO } from "../types/postInputDTO";


export class PostBusiness {
    private postData: IPostData;

    private idGenerator: IdGenerator;

    constructor(
        postDataRepository: IPostData
    ){
        this.postData = postDataRepository;
        this.idGenerator = new IdGenerator;
    }
    postCreator = async(input: postInputDTO) => {
        const { photo, description, type_post} = input;

        if(!photo || !description || !type_post){
            throw new Error('Preencha os campos "photo", "description" e "type_post".');
        }

        const id = this.idGenerator.generateId();

        let date = new Date();
        let day = String(date.getDate()).padStart(2, '0');
        let month = String(date.getMonth() + 1).padStart(2, '0');
        let year = date.getFullYear();
        const actualDate = year + '-' + month + '-' + day;

        const post = new Post(
            id,
            photo,
            description,
            actualDate,
            type_post,
        );
        
        await this.postData.insert(post);
    }
    findPost = async(id: string) => {
        if(!id){
            throw new Error('O "id" precisa ser informado nos parameters.');
        }
        const result = await this.postData.findPostById(id);
        return result
    }

}