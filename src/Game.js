import React, { Component } from "react";
import Pile from "./Pile";
import Card from "./suit/Card";
import Foundation from "./Foundation";
import WastePiles from "./WastePiles";
import Deck from "./Deck";

class Game extends Component {
  constructor(props) {
    super(props);
    this.deck = new Deck();
    this.drawnCards = [];
    this.wastePile = null;
    this.pileCards = this.deck.getPileCards();
    this.state = {
      recent_drawn_card: <Card id="pile-card" className="" />
    };
  }

  getOneCard() {
    let card = this.pileCards.pop();
    this.drawnCards.push(card);
    this.setState({ recent_drawn_card: card });
  }

  renderPile() {
    if (!this.state.recent_drawn_card) {
      this.pileCards = this.drawnCards.slice().reverse();
      this.drawnCards = [];
    }
    return (
      <Pile
        className={"card face-down-card"}
        onClick={this.getOneCard.bind(this)}
      />
    );
  }

  renderFoundation() {
    return (
      <Foundation
        updateCard={this.updateRecentDrawnCards.bind(this)}
        updateWastePile={this.updateWastePile.bind(this)}
      />
    );
  }

  updateRecentDrawnCards() {
    this.updateDrawnCards();
    this.setState({ recent_drawn_card: this.drawnCards.pop() });
  }

  updateDrawnCards() {
    this.drawnCards.pop();
  }

  updateWastePile(pileNumber) {
    this.wastePile.updatePile(pileNumber);
  }

  renderWastePiles() {
    return (
      <WastePiles
        cards={this.deck.getWastePileCards()}
        updateCard={this.updateRecentDrawnCards.bind(this)}
        ref={instance => (this.wastePile = instance)}
      />
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row-one">
          <div className="pile">
            {this.renderPile() /* {pile} */}
            {this.state.recent_drawn_card /* {drawn-card-from-pile} */}
          </div>
          <div>{this.renderFoundation()}</div>
        </div>
        <div>{this.renderWastePiles()}</div>
      </div>
    );
  }
}

export default Game;
