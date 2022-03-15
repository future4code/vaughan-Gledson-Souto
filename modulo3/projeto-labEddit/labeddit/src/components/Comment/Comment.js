import React from "react";
import { useParams } from "react-router";
import UseForm from "../../hooks/useForm";
import UseRequestData from "../../hooks/useRequestData";
import { changeCommentVote, commentPost, createCommentVote, deleteCommentVote, } from "../../services/requests";
import { Comments, ContainerComment, StyleComment, } from "./style";
import { newDate } from "../../constants/date";
import { ArrowDown, ArrowUp, UserIcon, FullArrowUp, FullArrowDown } from "../../Icons/icons";
import { LoadingStyle } from "../../pages/FeedPage/style";
import PostComment from "../PostComment/PostComment";


const Comment = () => {
    const params = useParams()
    const [listComments, getData, isLoading] = UseRequestData(`/posts/${params.id}/comments`, [])
    const { form, onChange, clearFields } = UseForm({ body: "" })



    const comment = (event) => {
        event.preventDefault()
        commentPost(form, clearFields, getData, params.id)
    }

    const onClickLike = (id, vote) => {
        if (vote <= 0) {
            createCommentVote(getData, id)
        } else {
            deleteCommentVote(getData, id)
        }
    }

    const onClickDesLike = (id, vote) => {
        if (vote >= 0) {
            changeCommentVote(getData, id)
        } else {
            deleteCommentVote(getData, id)
        }
    }


    const renderedComment = listComments && listComments.map((comments) => {
        return (
            <Comments key={comments.id}>
                <p className="user"><UserIcon /> Enviado por u/ {comments.username} em {newDate(comments.createdAt)}</p>
                <p className="body">{comments.body}</p>
                <div className="feedback">
                    <a onClick={() => onClickLike(comments.id, comments.userVote)}>
                    {comments.userVote > 0? <FullArrowUp />: <ArrowUp/>}
                    </a>

                    {comments.voteSum === null ? 0 :
                    <div>
                        {comments.userVote < 0 ? <p className="negative">{comments.voteSum}</p> :
                        <div>
                            {comments.userVote > 0 ? <p className="positive">{comments.voteSum}</p>: comments.voteSum}
                        </div>}
                    </div>}

                    <a onClick={() => onClickDesLike(comments.id, comments.userVote)}>
                    {comments.userVote < 0? <FullArrowDown />: <ArrowDown/>}
                    </a>
                </div>
            </Comments>
        )
    })

    return (
        <ContainerComment>
            {isLoading ? <LoadingStyle></LoadingStyle> :
                <div className="divComment">

                    <PostComment />

                    <StyleComment onSubmit={comment}>
                        <input placeholder="no que está pensando?" className="textArea"
                            name={"body"}
                            onChange={onChange}
                            value={form.body}
                            required
                        />

                        <button type="submit">Comentar</button>

                    </StyleComment>
                    {renderedComment}

                </div>}
        </ContainerComment>
    )
}
export default Comment;