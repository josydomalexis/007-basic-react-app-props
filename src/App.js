import logo from "./logo.svg";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import { CastleContext, ThemeContext } from "./index.js";
import Nav from "./Nav.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function App() {
  const NavList = {
    Home: "/",
    About_Us: "/about_us",
    Gallery: "/gallery",
    Contact_Us: "/contact_us",
  };

  const Images = ["model.jpg"]
  return (
    <div className="App">
      <Nav value={NavList} />
      <Header value={Images} />
      <Footer />
    </div>
  );
}

export default App;
