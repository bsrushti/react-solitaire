import React from "react";
import Card from "./Card";

class Clubs {
  constructor() {
    this.class = "card";
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
        id={`club_` + number}
        key={`club_` + number}
        number={number}
        symbol="&#9827;"
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
        id={`club_1`}
        key={`club_1`}
        number="A"
        symbol="&#9827;"
        classes={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getKing() {
    return (
      <Card
        id={`club_13`}
        key={`club_13`}
        number="K"
        symbol="&#9827;"
        classes={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getQueen() {
    return (
      <Card
        id={`club_12`}
        key={`club_12`}
        number="Q"
        symbol="&#9827;"
        classes={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }

  getJoker() {
    return (
      <Card
        id={`club_11`}
        key={`club_11`}
        number="J"
        symbol="&#9827;"
        classes={this.class}
        onDragStart={this.drag.bind(this)}
        draggable={true}
      />
    );
  }
}

export default Clubs;
