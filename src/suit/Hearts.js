import React from "react";
import Card from "./Card";

class Hearts {
  constructor() {
    this.class = "card red-cards ";
  }

  drag(event) {
    event.dataTransfer.setData("card", event.target.id);
  }

  addClass(className) {
    this.class += className;
  }

  getCard(number) {
    return (
      <Card
        id={`hearts_` + number}
        key={`hearts_` + number}
        number={number}
        symbol="&#9829;"
        classes={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getAllFaceCards() {
    return [this.getJoker(), this.getQueen(), this.getKing()];
  }

  getAce() {
    return (
      <Card
        id={`hearts_1`}
        key={`hearts_1`}
        number="A"
        symbol="&#9829;"
        classes={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getKing() {
    return (
      <Card
        id={`hearts_13`}
        key={`hearts_13`}
        number="K"
        symbol="&#9829;"
        classes={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getQueen() {
    return (
      <Card
        id={`hearts_12`}
        key={`hearts_12`}
        number="Q"
        symbol="&#9829;"
        classes={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getJoker() {
    return (
      <Card
        id={`hearts_11`}
        key={`hearts_11`}
        number="J"
        symbol="&#9829;"
        classes={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }
}

export default Hearts;
