import React from "react";
import "./style/monsters.css";
import { Navigate, redirect, useNavigate } from "react-router-dom";

export const temporaryList = [
  {
    name: "Dragon",
    type: "Draconic",
    pic: "/monster_images/Dragon.png",
    description:
      "Scaly, reptilian creatures capable of flight and breathing fire.",
    index: 0,
    habitat: "Plains, mountains, caves",
    longdesc: "Dragons have had an influence on human culture and society for millenia. As beings of immense power and intelligence, they were widely feared and revered. While the reputation of dragons is one of a destructive, mindless beast, the majority of dragons prefer a solitary life in the remote wilderness."
  },
  {
    name: "Unicorn",
    type: "Mystical Ungulate",
    pic: "/monster_images/unicorn.png",
    description:
      "Beings resembling horses with sparkling narwhal tusks. They are said to have a strong sense of justice.",
    index: 1,
    habitat: "Unknown",
    longdesc: "Little is known about the unicorn despite the fact that they are one of the most well-known mystical creatures."
  },
];


function MonsterItem({ name, type, pic, description, index, idx }) {
  const nav = useNavigate(); // Create and link page using monster id
  const url = `/monsters/${idx}`;
  return (
    <li key={index} className="monster-item" onClick={() => nav(url)}>
      <h2 className="monster-name-header">{name}</h2>
      <dl>
        <dt>Name: </dt>
        <dd>{name}</dd>
        <dt>Type:</dt>
        <dd>{type}</dd>
        <img src={pic} alt="" height={100} width={100}/>
        <dt>Info:</dt>
        <dd>{description}</dd>
      </dl>
    </li>
  );
}

function GenerateList() {
  const elements = temporaryList.map((item) => (
    <MonsterItem
      name={item.name}
      type={item.type}
      pic={item.pic}
      description={item.description}
      key={item.index}
      idx={item.index}
    />
  ));

  return elements;
}

const title = <h1 className="title">Monster Encyclopedia</h1>;

// const buttons = <button className="submit-button">Submit New Monster</button>; // interact with database

function Monsters() {
  return (
    <>
      <div style={{backgroundColor:"rgb(200, 155, 243)", padding:"5vh", minHeight:"100vh"}}>
        <div style={{backgroundColor:"white", maxWidth:"25%", margin:"auto", padding:"1vh"}}>
          {title}
        </div>
        
        {/* {buttons} */}

        <ul className="monster-list">
          <GenerateList />
        </ul>
      </div>
      
    </>
  );
}

export default Monsters;
