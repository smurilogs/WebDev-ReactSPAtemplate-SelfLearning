import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

const Router = () => {
   return(
        <div className="Router">
            <BrowserRouter>
                <Routes>
                    <Route element={ <Login /> }  path="/login" exact />
                    <Route element={ <Signup /> }  path="/signup" exact />
                    <Route element={ <Home /> }  path="/home" exact />
                </Routes>
            </BrowserRouter>
        </div>
   )
}
export default Router;