import React from "react";
import Card from "./Card";

class Diamond {
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
        id={`diamond_` + number}
        key={`diamond_` + number}
        number={number}
        symbol="&#9830;"
        className={this.class}
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
        id={`diamond_1`}
        key={`diamond_1`}
        number="A"
        symbol="&#9830;"
        className={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getKing() {
    return (
      <Card
        id={`diamond_13`}
        key={`diamond_13`}
        number="K"
        symbol="&#9830;"
        className={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getQueen() {
    return (
      <Card
        id={`diamond_12`}
        key={`diamond_12`}
        number="Q"
        symbol="&#9830;"
        className={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getJoker() {
    return (
      <Card
        id={`diamond_11`}
        key={`diamond_11`}
        number="J"
        symbol="&#9830;"
        className={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }
}

export default Diamond;
