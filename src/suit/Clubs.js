import React, { Component } from "react";
import Card from "./Card";

class Clubs extends Component {
  getCard(number) {
    return <Card key={number} number={number} symbol="&#9827;" classes={"card"}/>;
  }
}

export default Clubs;
