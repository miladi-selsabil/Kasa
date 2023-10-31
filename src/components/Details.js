import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const LogementDetail = () => {
  const [logementDetail, setLogementDetail] = useState({});
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [equipementsVisible, setEquipementsVisible] = useState(false); 
  const { id } = useParams();

  useEffect(() => {
    const fetchLogementDetail = async () => {
      try {
        const response = await fetch("http://localhost:3005/logements.json");
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

  const description = () => {
    setDescriptionVisible(!descriptionVisible);
  };
const equipements = () => {
  setEquipementsVisible(!equipementsVisible);
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
      <p>
        <button onClick={description}>
          {descriptionVisible ? "Description >" : "Description   <"}
        </button>
      </p>
      {descriptionVisible && <p> {logementDetail.description}</p>}

      <p>
        <button onClick={equipements}>
          {equipementsVisible ? "Equipements >" : "Equipements <"}
        </button>
      </p>
      {equipementsVisible && (
        <div>
          <ul>
            {logementDetail.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LogementDetail;
