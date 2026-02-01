import Categories from "../components/categories";
import Carousel from "../components/carousel";
import NavBar from "../components/navbar";
import "../styles/App.css";
import PopularDeals from "../components/populardeals";
import Miscellaneous from "../components/miscellanceous";
import Footer from "../components/footer";
import { useEffect } from "react";
import { useState } from "react";
import ExploreButton from "./explorebtn";
const Layout = () => {
  return (
    <>
      <Categories />
      <Carousel />
      <PopularDeals />
      <ExploreButton/>
      <Miscellaneous />
    </>
  );
};

export default Layout;
