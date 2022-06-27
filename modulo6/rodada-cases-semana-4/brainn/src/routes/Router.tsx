import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import Home from 'pages/home'


const Router = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="*" element={<Navigate to="/" replace/>}/>
    
            </Routes>
        </BrowserRouter>
    )
}

export default Router;