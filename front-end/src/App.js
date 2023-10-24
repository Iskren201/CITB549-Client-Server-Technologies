import React from "react";
import "./index.css";

import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { NavBar } from "./Components/NavBar/NavBar";
import { About } from "./Components/About/About";
import { Service } from "./Components/Service/Service";
import { Contact } from "./Components/Contact/Contact";
import { Gallery } from "./Components/Gallery/Gallery";
import { Footer } from "./Components/Footer/Footer";




function App() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <NavBar />
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Service" element={<Service />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Gallery" element={<Gallery />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>

    );
};

export default App;
