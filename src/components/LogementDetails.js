import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collapse from "./Collapse.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel.js";
import { LOGEMENTS_URL } from "../config.js";

const LogementDetail = () => {
  const [logementDetail, setLogementDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchLogementDetail = async () => {
      try {
        const response = await fetch(LOGEMENTS_URL);
        const logements = await response.json();
        const logement = logements.find((item) => item.id === id);
        setLogementDetail(logement);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données du logement : ",
          error
        );
      }
    };

    fetchLogementDetail();
  }, [id]);

  const equipements = () => {
    return (
      logementDetail.equipments && (
        <div>
          <ul>
            {logementDetail.equipments.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
          </ul>
        </div>
      )
    );
  };
  const renderRatingStars = () => {
    const filledStars = Array.from(
      { length: logementDetail.rating },
      (index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          style={{ color: "#ff6060" }}
        />
      )
    );
    const emptyStars = Array.from(
      { length: 5 - logementDetail.rating },
      (index) => (
        <FontAwesomeIcon
          key={index + logementDetail.rating}
          icon={faStar}
          style={{ color: "#ccc" }}
        />
      )
    );
    return [...filledStars, ...emptyStars];
  };
  return (
    <div className="logement-detail">
      <Carousel images={logementDetail.pictures || []} />
      <div className="info">
        <h2 className="title">{logementDetail.title}</h2>
        {logementDetail.host && (
          <div className="host-section">
            <h4>{logementDetail.host.name}</h4>
            <img
              className="host-img"
              src={logementDetail.host.picture}
              alt={logementDetail.host.name}
            />
          </div>
        )}
      </div>
      <p className="location">{logementDetail.location}</p>
      <div className="details_star">
        {logementDetail.tags && (
          <div className="tags">
            {logementDetail.tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
        )}
        {logementDetail.rating && (
          <div className="star">{renderRatingStars()}</div>
        )}
      </div>

      <div className="btn-de">
        <Collapse title="Description" content={logementDetail.description} />
        <Collapse title="Equipement" content={equipements()} />
      </div>
    </div>
  );
};

export default LogementDetail;
