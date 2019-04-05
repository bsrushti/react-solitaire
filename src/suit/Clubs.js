import React, { Component } from "react";
import Card from "./Card";

class Clubs extends Component {
  drag(event) {
    event.dataTransfer.setData("card", event.target.id);
  }

  getCard(number) {
    return (
      <Card
        id={`club_` + number}
        key={number}
        number={number}
        symbol="&#9827;"
        classes={"card"}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getAllFaceCards() {
    return [this.getJoker(), this.getQueen(), this.getKing()];
  }

  getKing() {
    return (
      <Card
        id={`club_K`}
        key="K"
        number="K"
        symbol="&#9827;"
        classes={"card"}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getQueen() {
    return (
      <Card
        id={`club_Q`}
        key="Q"
        number="Q"
        symbol="&#9827;"
        classes={"card"}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getJoker() {
    return (
      <Card
        id={`club_J`}
        key="J"
        number="J"
        symbol="&#9827;"
        classes={"card"}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }
}

export default Clubs;
