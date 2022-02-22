import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/feedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = () => {
    return(
        <BrowserRouter>

            <Routes>

                <Route exact path={"/"} element={<LoginPage/>}/>

                <Route exact path={"/SignUp"} element={<SignUpPage/>}/>

                <Route exact path={"/feed"} element={<FeedPage/>}/>

                <Route exact path={"/feed/post/:id"} element={<PostPage/>}/>

            </Routes>

        </BrowserRouter>
    )
}
export default Router;