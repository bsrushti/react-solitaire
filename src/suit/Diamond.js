import React, { Component } from "react";
import Card from "./Card";

class Diamond extends Component {
  getCard(number) {
    return (
      <Card
        key={number}
        number={number}
        symbol="&#9830;"
        classes={"card red-cards"}
      />
    );
  }

  getAllFaceCards() {
    return [this.getJoker(), this.getQueen(), this.getKing()];
  }

  getKing() {
    return (
      <Card key="K" number="K" symbol="&#9830;" classes={"card red-cards"} />
    );
  }

  getQueen() {
    return (
      <Card key="Q" number="Q" symbol="&#9830;" classes={"card red-cards"} />
    );
  }

  getJoker() {
    return (
      <Card key="J" number="J" symbol="&#9830;" classes={"card red-cards"} />
    );
  }
}

export default Diamond;
