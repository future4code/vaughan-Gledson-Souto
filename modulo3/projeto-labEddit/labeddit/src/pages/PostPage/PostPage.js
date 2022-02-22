import React from "react";
import { useParams } from "react-router-dom";
import UseRequestData from "../../hooks/useRequestData";

const PostPage = () => {
    const params = useParams()
    const [listComments] = UseRequestData(`/posts/${params.id}/comments`, [])


    return (
      <div>
        <h1>Post</h1>
        {listComments && listComments.map((comments)=>{
            return(
                <div key={comments.id}>
                    {comments.body}
                    {comments.createdAt}
                </div>
            )
        })}
      </div>
    );
  }
  
  export default PostPage;
  