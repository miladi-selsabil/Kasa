import Imag from "./../assets/source.png";
import React from "react";
import Banner from "./Banner";

const BannerHome = () => {

  return (
    <div>
      <Banner className="banner-home" image={Imag} />
      <h1 className="txt-banner">Chez vous, pârtout ailleurs</h1>
    </div>
  );
};

export default BannerHome;
