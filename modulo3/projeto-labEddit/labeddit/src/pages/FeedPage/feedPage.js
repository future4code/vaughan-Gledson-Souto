import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseForm from "../../hooks/useForm";
import UseRequestData from "../../hooks/useRequestData";
import { goToPost } from "../../routes/Coordinator";
import { changePostVote, createPostVote, deletePostVote, publishPost } from "../../services/requests";
import { ContainerFeed, ContainerPost, ContainerVotes, InfosPost, LoadingStyle, StyleCardFeed, StylePublish, StyleInput } from "./style";
import { newDate } from "../../constants/date";
import {  CommentIcon, UserIcon, ArrowDown, ArrowUp, FullArrowUp, FullArrowDown, Search} from "../../Icons/icons";
import Header from "../../components/Header/Header";
import UseProtectPage from "../../hooks/useProtectPage";
import Communities from "../../components/Communities/Communities";
import Share from "../../components/Share/Share";



const FeedPage = () => {
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(10)
  const navigate = useNavigate()
  const [listPosts, getData, isLoading] = UseRequestData(`/posts?page=${page}&size=${size}`, [])
  const { form, onChange, clearFields } = UseForm({ title: "", body: "" , search: ""})

  UseProtectPage()
  const publish = (event) => {
    event.preventDefault()
    publishPost(form, clearFields, getData)
  }

  const onClickLike = (id, vote) => {
    if(vote <=  0){
      createPostVote(getData, id)
    }else{
     deletePostVote(getData, id)
    }
  }

  const onClickDesLike = (id, vote) => {
    if(vote >=  0){
      changePostVote(getData, id)
    }else{
      deletePostVote(getData, id)
    }
  }

  const pagination1 = () => {
    setPage(1)
  }
  const pagination2 = () => {
    setPage(2)
  }
  const pagination3 = () => {
    setPage(3)
  }
  const pagination4 = () => {
    setPage(4)
  }
  const pagination5 = () => {
    setPage(5)
  }

  const postRendered = listPosts && listPosts
  .filter(post => {
    return post.title.toLowerCase().includes(form.search.toLowerCase())
    })
  .map((post) => {
    return (
      <StyleCardFeed key={post.id}>
        <ContainerVotes>

          <a onClick={() =>  onClickLike(post.id, post.userVote)}>
            {post.userVote > 0? <FullArrowUp />: <ArrowUp/>}
          </a>
              {post.voteSum === null ? 0 :
               <div>
                 {post.userVote < 0? <p className="negative">{post.voteSum}</p> : 
                 <div>
                   {post.userVote > 0? <p className="positive">{post.voteSum}</p> :
                     post.voteSum}
                </div>}
              </div>}


          <a onClick={()=> onClickDesLike(post.id,  post.userVote)}>
          {post.userVote < 0? <FullArrowDown />: <ArrowDown/>}
          </a>
        </ContainerVotes>

        <InfosPost>
          <div onClick={() => goToPost(navigate, post.id)}>
          <p className="user"><UserIcon/> Enviado por u/ {post.username} em {newDate(post.createdAt)}</p>
          <p className="title">{post.title}</p>
          <p className="body">{post.body}</p>
          </div>
          <div className="buttons">
          <p className="comments" onClick={() => goToPost(navigate, post.id)}>
            <CommentIcon/> {post.commentCount === null ? 0 : post.commentCount}
           {post.commentCount <= 1? <p> Comentário </p> : <p>Comentários</p>} 
          </p>
          <Share/>
          </div>

        </InfosPost>
      </StyleCardFeed>
    )
  })

  return (
    <>
      <Header />

      <StyleInput>
        <Search/>
          <input  placeholder="Buscar no labeddit"
          name={"search"}
          value={form.search}
          onChange={onChange}
          />
      </StyleInput>
    <ContainerFeed>
      <ContainerPost>
        <StylePublish onSubmit={publish}>
          <input placeholder="Título" className="inputTitle"
            name={"title"}
            value={form.title}
            onChange={onChange}
            required
          />
          <input placeholder="Texto" className="inputBody"
            name={"body"}
            value={form.body}
            onChange={onChange}
            pattern={"^.{1,300}"}
            title={"A precisa precisa contem no mínimo 1 caracteres e no máximo 300"}
            required
          />
          <button type={"submit"}>Postar</button>
        </StylePublish>
        {isLoading? <LoadingStyle /> :
        <>
          {postRendered}
          <div className="btn-pagination">
            <button onClick={()=> pagination1()}>1</button>
            <button onClick={()=> pagination2()}>2</button>
            <button onClick={()=> pagination3()}>3</button>
            <button onClick={()=> pagination4()}>4</button>
            <button onClick={()=> pagination5()}>5</button>
          </div>
          </>}

      </ContainerPost>
      <Communities/>
    </ContainerFeed>
     </>
  );
}

export default FeedPage;
