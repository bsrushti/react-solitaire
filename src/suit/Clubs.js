import React, { Component } from "react";
import Card from "./Card";

class Clubs extends Component {
  getCard(number) {
    return (
      <Card key={number} number={number} symbol="&#9827;" classes={"card"} />
    );
  }

  getAllFaceCards() {
    return [this.getJoker(), this.getQueen(), this.getKing()];
  }

  getKing() {
    return <Card key="K" number="K" symbol="&#9827;" classes={"card"} />;
  }

  getQueen() {
    return <Card key="Q" number="Q" symbol="&#9827;" classes={"card"} />;
  }

  getJoker() {
    return <Card key="J" number="J" symbol="&#9827;" classes={"card"} />;
  }
}

export default Clubs;
