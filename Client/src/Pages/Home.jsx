import React from "react";
import Announcement from "../Components/Announcement";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;
