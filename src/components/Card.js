import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Card = () => {
  const [logementData, setLogementData] = useState([]);
  const logements = "http://localhost:3000/logements.json";

  const log = async () => {
    try {
      const response = await fetch(logements, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setLogementData(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    log();
  }, []);

  

  return (
      <div className="mm">
        {logementData.map((item) => (
          <NavLink className="card" key={item.id} to={`logement/${item.id}`}>
            <p>{item.title}</p>
            <img src={item.cover} alt="Cover" />
             <div className="over"></div>
          </NavLink>
        ))}       

      </div>
      
  
  );
};

export default Card;
 