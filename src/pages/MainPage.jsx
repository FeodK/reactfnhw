import React from "react";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Advantages from "../components/Advantages";
import Top from "../components/Top";
import Sale from "../components/Sale";
import Goods from "../components/Goods";

const MainPage = () => {
  return (
    <div className="container">
      <Header />
      <Top />
      <Sale />
      <Goods/>
      <Subscribe />
      <Advantages/>
      <Footer />
    </div>
  );
};

export default MainPage;
