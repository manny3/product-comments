import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./home";
import User from "./user";

const Pages = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Pages