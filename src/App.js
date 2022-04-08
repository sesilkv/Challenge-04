import React from "react";
import "./main.css"
import Navbar from "./Components/Navbar/Navbar"
import Header from "./Components/Header/Header"
import Search from "./Components/Search/Panel"
import Result from "./Components/Result/Result"
import Footer from "./Components/Footer/Footer"


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
