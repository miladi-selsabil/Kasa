import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const LogementDetail = () => {
  const [logementDetail, setLogementDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchLogementDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/logements.json/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setLogementDetail(data);
        } else {
          console.error("Logement non trouvé");
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchLogementDetail();
  }, [id]);

  return (
    <div className="logement-detail">
      <h2>{logementDetail.title}</h2>
      <img src={logementDetail.cover} alt="Cover" />
      <p>Description : {logementDetail.description}</p>
    </div>
  );
};

export default LogementDetail;
