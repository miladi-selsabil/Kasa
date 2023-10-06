import "./../index.css";
import logements from "./../data/logements.json"
import React, {useState, useEffect} from 'react';
const  Cart = () => {
  const [logementData, setLogementData] = useState([]);
  
const log = async () => {

    try{
        const response = await fetch(logements, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
      const data = await response.json();
      setLogementData(data);
    }catch(error){
        console.log('errpor', error);
    }
};
useEffect(() =>{
    log();
}, []);
   

    return (
      <div>
        <ul>
          {logementData.map((item) => (
            <li key={item.id}>{item.id}</li>
          ))}
        </ul>
      </div>
    );
}
export default Cart;