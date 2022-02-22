import React from "react";
import { useNavigate } from "react-router-dom";
import UseRequestData from "../../hooks/useRequestData";
import { goToPost } from "../../routes/Coordinator";

const FeedPage = () => {
    const navigate = useNavigate()
    const [listPosts] = UseRequestData(`/posts`, [])

    const postRendered = listPosts && listPosts.map((post)=>{
        return(
            <div key={post.id} onClick={()=> goToPost(navigate, post.id)}>
                <p>{post.body}</p>
                <p>{post.title}</p>
            </div>
        )
    })
    return (
      <div>
        <h1>Feed</h1>
        {postRendered}
      </div>
    );
  }
  
  export default FeedPage;
  