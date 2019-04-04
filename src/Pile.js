import React, { Component } from "react";
import Spade from "./Spade";

class Pile extends Component {
  constructor(props) {
    super(props);
    this.suits = {
      spades: new Spade()
    };
  }

  renderPile() {
    return (
      <div className="card face-down-card" onClick={this.putCard.bind(this)} />
    );
  }

  getRandomNumber() {
    return Math.round(Math.random() * 10);
  }

  getOneCard() {
    let number = this.getRandomNumber();
    return this.suits.spades.getCard(number);
  }

  render() {
    return <div className="card face-down-card" onClick={this.props.onClick} />;
  }
}

export default Pile;
