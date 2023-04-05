import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home/home';

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}