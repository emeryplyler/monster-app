import React from "react";
import "./style/monsters.css";
import { useParams } from "react-router-dom";
import { temporaryList } from "./Monsters"; // TODO: replace this with data fetching from database

function MonsterDetails() {
  const params = useParams();
  let id = params.monsterid;
  let monster;
  if (id) {
    monster = temporaryList[id]; // add logic to see if we're using the database or the backup array
  } else {
    return;
  }

  return (
    <>
      <div style={{ backgroundColor: "rgb(200, 155, 243)", padding: "6vh" }}>
        <div
          style={{
            backgroundColor: "white",
            maxWidth: "60%",
            margin: "auto",
            padding: "4vh",
            paddingBottom: "8vh",
          }}
        >
          <h1>{monster.name}</h1>
          <h2>
            Family: <span style={{ fontWeight: "normal" }}>{monster.type}</span>
          </h2>
          <h2>
            Habitat:{" "}
            <span style={{ fontWeight: "normal" }}>{monster.habitat}</span>
          </h2>
          <div className="longdesc">
            <p>{monster.longdesc}</p>
          </div>
          <img src={monster.pic} alt="" />
          <div>
            <a href="/">Back</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MonsterDetails;
