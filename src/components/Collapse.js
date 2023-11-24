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
        {openVisible ? (
          <p className="btn-text">
            {props.title}{" "}
            <span>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </p>
        ) : (
          <p className="btn-text">
            {props.title}{" "}
            <span>
              <FontAwesomeIcon icon={faChevronUp} />
            </span>
          </p>
        )}
      </button>
      {openVisible && <div className="txt-content">{props.content}</div>}
    </div>
  );
};

export default Collapse;
