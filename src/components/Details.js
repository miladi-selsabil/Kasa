import React, { useState, useEffect } from "react";

const Detail = () => {
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
    <div>
      <div>
        {logementData.map((item) => (
          <div className="log" key={item.id} to={`logement/${item.id}`}>
            <img src={item.cover} alt="Cover" />
            <p>{item.title}</p>
            <p>{item.location}</p>

            <img src={item.cover} alt="Cover" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Detail;
