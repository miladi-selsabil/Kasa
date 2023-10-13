import React, { useState, useEffect } from "react";

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

  const redirectDetailPage = (id) => {
    window.location.href = `${id}`;
  };

  return (
    <div>     
       <div className="mm">

      {logementData.map((item) => (
        <div className="card" key={item.id} onClick={() => redirectDetailPage(item.id)}>
          
            <article className="article">
              <p>{item.title}</p>
            </article>
          </div>
     
      ))}
         </div>
    </div>
  );
};

export default Card;
