import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Description from '../pages/description/Description';
import Error from '../pages/error/Error';

const Router = () => {
    return(
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/description/:id" element={<Description/>}/>
                <Route path="*" element={<Error/>}/>

            </Routes>

        </BrowserRouter>
    );
}
export default Router;