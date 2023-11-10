import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collapse from "./Collapse";

const LogementDetail = () => {
  const [logementDetail, setLogementDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchLogementDetail = async () => {
      try {
        const response = await fetch("http://localhost:3000/logements.json");
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
  )
};
  return (
    <div className="logement-detail">
      <img src={logementDetail.cover} alt="Cover" />
      <h2 className="title">{logementDetail.title}</h2>
      <p className="location">{logementDetail.location}</p>
      {logementDetail.tags && (
        <div className="tags">
          {logementDetail.tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
      )}
      <div className="btn-de">
        <Collapse title="Description" content={logementDetail.description} />
        <Collapse title="Equipement" content={equipements()} />
      </div>
    </div>
  );
};

export default LogementDetail;
