import React, { Component } from "react";
import Spade from "./suit/Spade";
import Diamond from "./suit/Diamond";
import Clubs from "./suit/Clubs";
import Hearts from "./suit/Hearts";

class Pile extends Component {
  constructor(props) {
    super(props);
    this.suits = {
      spades: new Spade(),
      diamonds: new Diamond(),
      clubs: new Clubs(),
      hearts: new Hearts()
    };
  }

  renderPile() {
    return (
      <div className="card face-down-card" onClick={this.putCard.bind(this)} />
    );
  }

  getAllCardsOfSuit(suit) {
    let cards = [];
    for (let i = 1; i <= 10; i++) {
      cards.push(this.suits[suit].getCard(i));
    }
    return cards;
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
