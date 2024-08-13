import React from "react";
import "./style/monsters.css";
import { useParams } from "react-router-dom";
// import getList from "./Monsters";
import { temporaryList } from "./Monsters"; // TODO: replace this with data fetching from database

function MonsterDetails() {
  const params = useParams();
  // TODO: error handling
  let id = params.monsterid;
  let monster = temporaryList[id];

  return (
    <>
      <div style={{backgroundColor:"rgb(200, 155, 243)", padding:"20px"}}>
        <div style={{backgroundColor:"white", maxWidth:"60%", margin:"auto", padding:"10px", paddingBottom: "30px"}}>
          <h1>{monster.name}</h1>
          <h2>Family: <span style={{fontWeight:"normal"}}>{monster.type}</span></h2>
          <h2>Habitat: <span style={{fontWeight:"normal"}}>{monster.habitat}</span></h2>
          <div className="longdesc">
            <p>{monster.longdesc}</p>
          </div>
          <img src={monster.pic} alt="" />
          <div><a href="/">Back</a></div>
          
        </div>
        
      </div>
    </>
  );
}

export default MonsterDetails;
