import React from "react";
import Comment from "../../components/Comment/Comment";
import Header from "../../components/Header/Header";
import UseProtectPage from "../../hooks/useProtectPage";
import { ContainerPost } from "./style";

const PostPage = () => {

   UseProtectPage()
    return (
      <>
      <Header />
     
      <ContainerPost>
        
        <Comment />
      </ContainerPost>
      </>
    );
  }
  
  export default PostPage;
  