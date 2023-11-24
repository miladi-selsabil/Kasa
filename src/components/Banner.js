import React from "react";

const Banner = ({ texte, image }) => {
  return (
    <div className="wrapper">
      <img src={image} alt="Banner" />
      {texte && <h1 className="txt-banner">{texte}</h1>}
    </div>
  );
};

export default Banner;
