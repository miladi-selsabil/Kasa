import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./../index.css";

const Collapse = (props) => {
  const [openVisible, setOpenVisible] = useState(false);

  const toggleOpen = () => {
    setOpenVisible(!openVisible);
  };

  return (
    <div className="bouton">
      <button className="button-collapse" onClick={toggleOpen}>
        <p className="btn-text">
          {props.title}
          {openVisible ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </p>
      </button>
      {openVisible && <div className="txt-content">{props.content}</div>}
    </div>
  );
};

export default Collapse;
