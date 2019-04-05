import React, { Component } from "react";
import Card from "./Card";

class Hearts extends Component {
  drag(event) {
    event.dataTransfer.setData("card", event.target.id);
  }

  getCard(number) {
    return (
      <Card
        id={`hearts_` + number}
        key={number}
        number={number}
        symbol="&#9829;"
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
        id={`hearts_K`}
        key="K"
        number="K"
        symbol="&#9829;"
        classes={"card red-cards"}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getQueen() {
    return (
      <Card
        id={`hearts_Q`}
        key="Q"
        number="Q"
        symbol="&#9829;"
        classes={"card red-cards"}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getJoker() {
    return (
      <Card
        id={`hearts_J`}
        key="J"
        number="J"
        symbol="&#9829;"
        classes={"card red-cards"}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }
}

export default Hearts;
