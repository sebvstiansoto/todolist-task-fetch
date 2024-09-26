import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Images from "./Images";
import Footer from "./Footer";
import "./Homepage.css";

const Home = () => {
  return (
    <>
      <div>
        <NavBar />
        <Header />
      </div>
      <div className="imagenes">
        <Images />
        <Images />
        <Images />
        <Images />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
