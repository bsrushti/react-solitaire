import React, { Component } from "react";
import Card from "./Card";

class Spade extends Component {
  getCard(number) {
    return (
      <Card key={number} number={number} symbol="&#9824;" classes={"card"} />
    );
  }
}

export default Spade;
