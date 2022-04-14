import React from "react";
import "./main.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home";
import Cari from "./Pages/Cari"
import Detail from "./Pages/Result";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cari" element={<Cari />}/>
        <Route path="/detail" element={<Detail />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
