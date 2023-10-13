import React from "react";

const Banner = ({ image }) => {
  return (
    <div className="banner">
      <img src={image} alt="Banner" />
    </div>
  );
};

export default Banner;
