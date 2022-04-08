import React from "react";
import "./main.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cari" />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
