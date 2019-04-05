import React, { Component } from "react";
import Card from "./Card";

class Diamond extends Component {
  drag(event) {
    event.dataTransfer.setData("card", event.target.id);
  }

  getCard(number) {
    return (
      <Card
        id={`diamond_` + number}
        key={`diamond_` + number}
        number={number}
        symbol="&#9830;"
        classes={"card red-cards"}
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
        id={`diamond_K`}
        key={`diamond_K`}
        number="K"
        symbol="&#9830;"
        classes={"card red-cards"}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getQueen() {
    return (
      <Card
        id={`diamond_Q`}
        key={`diamond_Q`}
        number="Q"
        symbol="&#9830;"
        classes={"card red-cards"}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getJoker() {
    return (
      <Card
        id={`diamond_J`}
        key={`diamond_J`}
        number="J"
        symbol="&#9830;"
        classes={"card red-cards"}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }
}

export default Diamond;
