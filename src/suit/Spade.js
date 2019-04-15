import React from "react";
import Card from "./Card";

class Spade {
  constructor() {
    this.class = "card ";
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
        id={`spade_` + number}
        key={`spade_` + number}
        number={number}
        symbol="&#9824;"
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
        id={`spade_1`}
        key={`spade_1`}
        number="A"
        symbol="&#9824;"
        className={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getKing() {
    return (
      <Card
        id={`spade_13`}
        key={`spade_13`}
        number="K"
        symbol="&#9824;"
        className={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getQueen() {
    return (
      <Card
        id={`spade_12`}
        key={`spade_12`}
        number="Q"
        symbol="&#9824;"
        className={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getJoker() {
    return (
      <Card
        id={`spade_11`}
        key={`spade_11`}
        number="J"
        symbol="&#9824;"
        className={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }
}

export default Spade;
