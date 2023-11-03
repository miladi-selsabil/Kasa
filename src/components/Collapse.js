import React, { useState } from "react";

const Collapse = (props) => {
   const [openVisible, setOpenVisisble] = useState(false);

   const toggleOpen = () => {
    setOpenVisisble(!openVisible);
   };

   return (
     <div className="bouton">
       <button className="button-collapse" onClick={toggleOpen}>
         {openVisible ? `${props.title} <` : ` ${props.title} >`}
       </button>
       {openVisible && <div>{props.content}</div>}
     </div>
   );
}

export default Collapse;