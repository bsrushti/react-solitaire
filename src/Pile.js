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

    this.state = {
      deck: this.getDeck()
    };
  }

  renderPile() {
    return (
      <div className="card face-down-card" onClick={this.putCard.bind(this)} />
    );
  }

  getDeck() {
    return this.getAllCardsOfSuit("spades").concat(
      this.getAllCardsOfSuit("diamonds").concat(
        this.getAllCardsOfSuit("hearts").concat(this.getAllCardsOfSuit("clubs"))
      )
    );
  }

  getNumberCards(suit) {
    let cards = [];
    for (let i = 2; i <= 10; i++) {
      cards.push(this.suits[suit].getCard(i));
    }
    return cards;
  }

  getAllCardsOfSuit(suit) {
    let cards = [];
    let aceCard = this.suits[suit].getCard("A");
    let numberCards = this.getNumberCards(suit);
    let faceCards = this.suits[suit].getAllFaceCards();
    cards.push(aceCard);
    cards = cards.concat(numberCards);
    cards = cards.concat(faceCards);
    return cards;
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 52 + 1);
  }

  getOneCard() {
    let number = this.getRandomNumber();
    return this.state.deck[number];
  }

  render() {
    return <div className="card face-down-card" onClick={this.props.onClick} />;
  }
}

export default Pile;
