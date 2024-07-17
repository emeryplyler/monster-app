import React from "react";
import "./style/monsters.css";
// import styles from "./style/monsters.css";

const temporaryList = [
  {
    name: "Dragon",
    type: "Draconic",
    pic: "/monster_images/Dragon.png",
    description:
      "Scaly, reptilian creatures capable of flight and breathing fire.",
    index: 0
  },
  {
    name: "Unicorn",
    type: "Mystical Ungulate",
    pic: "/monster_images/unicorn.png",
    description:
      "Beings resembling horses with sparkling narwhal tusks. They are said to have a strong sense of justice.",
    index: 1
  },
];

function MonsterItem({ name, type, pic, description, index }) {
  return (
    <li className="monster-item">
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
    />
  ));

  return elements;
}

const title = <h1 className="title">Monster Encyclopedia</h1>;

// const buttons = <button className="submit-button">Submit New Monster</button>; // interact with database

function Monsters() {
  return (
    <>
      {title}
      {/* {buttons} */}

      <ul className="monster-list">
        <GenerateList />
      </ul>
    </>
  );
}

export default Monsters;
