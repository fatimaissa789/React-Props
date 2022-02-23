import React from "react";
import "./App.css";
import Profil from "./profil/Profil.js";
import "./ReactHeader.js";

function App() {
  const styleObject = {fonFamily:'Roboto',textAlign:"center",fontSize:'15px',padding:"15px"};
  const button={}
  const alertMyInput = (name) => alert(name);
  return (
    <div style={styleObject}>
      <Profil
        name="Joe"
        bio="lorem ipsum lorem ipsum lorem ipsum"
        profession="lorem ipsum"
        image="./img.jpg"
        
        alertMyInput={alertMyInput}
      />
    </div>
  );
}

export default App;
