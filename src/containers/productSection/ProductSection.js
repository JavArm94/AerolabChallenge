import React from "react";
import Carousel from "../../components/carousel";
import PageControls from "../../components/pageControls/PageControls";
import Products from "../../components/products";

const ProductSection = () => {
  return (
    <>
      <Carousel></Carousel>
      <PageControls filterOn={true}></PageControls>
      <Products></Products>
      <PageControls filterOn={false}></PageControls>
    </>
  );
};

export default ProductSection;
