import React from "react";
import Carousel from "../../components/carousel";
import PageControls from "../../components/pageControls/PageControls";
import Products from "../../components/products";
import { Spinner } from "../../components/addPoints/Styles";
import { LoadingScreen } from "../../styles/LoadingScreen";
import { LoadedAnimation } from "../../styles/LoadedAnimation";
const ProductSection = ({ isLoading }) => {
  return (
    <>
      <LoadedAnimation isLoading={isLoading}>
        <Carousel></Carousel>
        <PageControls filterOn={true}></PageControls>
        <Products></Products>
        <PageControls filterOn={false}></PageControls>
      </LoadedAnimation>
      <LoadingScreen isLoading={isLoading}>
        <Spinner>
          <div></div>
          <h1>Page loading...</h1>
        </Spinner>
      </LoadingScreen>
    </>
  );
};

export default ProductSection;
