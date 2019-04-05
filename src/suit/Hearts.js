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

  getKing() {
    return (
      <Card
        id={`hearts_K`}
        key={`hearts_K`}
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
        id={`hearts_Q`}
        key={`hearts_Q`}
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
        id={`hearts_J`}
        key={`hearts_J`}
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
