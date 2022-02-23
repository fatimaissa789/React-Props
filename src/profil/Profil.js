import React from "react";
// import { Profil } from "./Defaut";

const Profil = (props) => {
  console.log(`props:`, props.name);
  return (
    
    <>
       <div>
        <img src={props.image} width="100px" />
      </div>
      <div>
        <span className="text">Fullname:{props.name}</span>
      </div>
      <div>
        <span className="text">Bio:{props.bio}</span>
      </div>
      <div>
        <span className="text">Profession:{props.profession}</span>
      </div>
      <button className="button
      " onClick={() => props.alertMyInput(`My name is James Brown `)}>
        ClickMe
      </button>
    </>
  );
};
export default Profil;
