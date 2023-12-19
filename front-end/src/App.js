import React, { useState } from "react";
import "./index.css";

import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { NavBar } from "./Components/NavBar/NavBar";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Gallery } from "./Components/Gallery/Gallery";
import { Footer } from "./Components/Footer/Footer";
import { Error } from "./Components/Error/Error";
import { Comments } from "./Components/Comments/Comments";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
// h-screen

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (email) => {
    // Вашата логика за успешен вход
    setLoggedIn(true);
    setUserEmail(email);
  };

  const handleLogout = () => {
    // Вашата логика за изход
    setLoggedIn(false);
    setUserEmail("");
  };

  //   return (
  //     <BrowserRouter>
  //       <NavBar />
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/Login" element={<Login />} />
  //         <Route path="/Register" element={<Register />} />
  //         <Route path="/About" element={<About />} />
  //         <Route path="/Comments" element={<Comments />} />
  //         <Route path="/Contact" element={<Contact />} />
  //         <Route path="/Gallery" element={<Gallery />} />
  //         <Route path="*" element={<Error />} />
  //       </Routes>
  //       <Footer />
  //     </BrowserRouter>
  //   );

  return (
    <BrowserRouter>
      {isLoggedIn && <NavBar />}{" "}
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Login setLoggedIn={setLoggedIn} />}
        />
        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<About />} />
        <Route path="/Comments" element={<Comments />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {isLoggedIn && <Footer />}{" "}
    </BrowserRouter>
  );
}

export default App;
