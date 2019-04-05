import React, { Component } from "react";
import Card from "./Card";

class Spade extends Component {
  constructor(props) {
    super(props);
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
        id={`spade_K`}
        key={`spade_K`}
        number="K"
        symbol="&#9824;"
        classes={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getQueen() {
    return (
      <Card
        id={`spade_Q`}
        key={`spade_Q`}
        number="Q"
        symbol="&#9824;"
        classes={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getJoker() {
    return (
      <Card
        id={`spade_J`}
        key={`spade_J`}
        number="J"
        symbol="&#9824;"
        classes={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }
}

export default Spade;
