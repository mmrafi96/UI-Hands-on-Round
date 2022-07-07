import React from "react";
import Products from "../products/Products";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="banner">
          <img src="./banner.jpg" alt="" />
        </div>
      </div>
      <Products />
    </>
  );
};

export default Home;
