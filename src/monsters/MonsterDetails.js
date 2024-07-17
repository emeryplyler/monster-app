import React from "react";
import "./style/monsters.css";
import { useParams } from "react-router-dom";

function MonsterDetails() {
    let {monsterid} = useParams();

    return (
      <>
        <title>{monsterid}</title>
        <p>fljdkfjkldjfkldjf {monsterid}</p>
      </>
    );
  }
  
  export default MonsterDetails;
  