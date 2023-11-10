import Imag from "./../assets/source.png";
import React from "react";
import Banner from "./Banner";

const BannerHome = () => {

  return (
    <div className="bn">
      <Banner className="banner-home" image={Imag} />
      <h1 className="txt-banner">Chez vous, partout ailleurs</h1>
      <div className="overlay"></div>
    </div>
  );
};

export default BannerHome;
