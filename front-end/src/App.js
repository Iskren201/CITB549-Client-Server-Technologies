import React from "react";
import './index.css'

import { Routes, Route } from "react-router-dom";

import { Navigation } from "./Components/Navigation/Navigation";

function App() {
    return (
        <main >
            <Routes>
                <Route path="/" element={<Navigation />} />
                {/* <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/register" element={<Register />} /> */}
            </Routes>
        </main >

    );
}

export default App;
