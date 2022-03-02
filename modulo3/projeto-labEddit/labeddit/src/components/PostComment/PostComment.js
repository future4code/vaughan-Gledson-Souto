import { useParams } from "react-router";
import UseRequestData from "../../hooks/useRequestData";
import { changePostVote, createPostVote, deletePostVote } from "../../services/requests";
import { CardPostComment, VotesComments, InfosPostComment } from "./style";
import { ArrowDown, ArrowUp, CommentIcon, UserIcon, FullArrowUp, FullArrowDown } from "../../Icons/icons";
import { newDate } from "../../constants/date";


const PostComment = () => {
    const params = useParams()
    const [postList, getData] = UseRequestData(`/posts`, [])
   
    
    const onClickLike = (id, vote) => {
        if (vote <= 0) {
            createPostVote(getData, id)
        } else {
            deletePostVote(getData, id)
        }
    }

    const onClickDesLike = (id, vote) => {
        if (vote >= 0) {
            changePostVote(getData, id)
        } else {
            deletePostVote(getData, id)
        }
    }

    const filterList = postList && postList.filter((post) => {
        if (post.id === params.id) {
            return post
        }
    })

    const renderedPostComment = filterList && filterList.map((post) => {
        return (
            <CardPostComment key={post.id}>

                <VotesComments>

                    <a onClick={() => onClickLike(post.id, post.userVote)} >
                    {post.userVote > 0? <FullArrowUp />: <ArrowUp/>}
                    </a>

                    {post.voteSum === null ? 0 :
                        <div>
                            {post.userVote < 0 ? <p className="negative">{post.voteSum}</p> :
                                <div>
                                    {post.userVote > 0 ? <p className="positive">{post.voteSum}</p> :
                                        post.voteSum}
                                </div>}
                        </div>}

                    <a onClick={() => onClickDesLike(post.id, post.userVote)} >
                    {post.userVote < 0? <FullArrowDown />: <ArrowDown/>}
                    </a>

                </VotesComments>

                <InfosPostComment>
                    <div>
                        <p className="user"><UserIcon /> Enviado por u/ {post.username} em {newDate(post.createdAt)}</p>
                        <p className="title">{post.title}</p>
                        <p className="body">{post.body}</p>
                    </div>
                    <p className="comments"><CommentIcon /> {post.commentCount === null ? 0 : post.commentCount}
                        {post.commentCount <= 1 ? <p> Comentário </p> : <p>Comentários</p>} </p>
                </InfosPostComment>

            </CardPostComment>
        )
    })

    return (
        <div>
            {renderedPostComment}

        </div>
    )
}
export default PostComment;