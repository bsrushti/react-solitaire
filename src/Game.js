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
    this.pileCards = this.deck.getPileCards();
    this.state = {
      recent_drawn_card: <Card id="pile-card" classes="card" />
    };
  }

  getOneCard() {
    let card = this.pileCards.pop();
    this.drawnCards.push(card);
    this.setState({ recent_drawn_card: card });
  }

  renderPile() {
    return <Pile classes={"card face-down-card"} onClick={this.getOneCard.bind(this)} />;
  }

  renderFoundation() {
    return <Foundation updateCard={this.updateRecentDrawnCards.bind(this)} />;
  }

  updateRecentDrawnCards() {
    this.updateDrawnCards();
    this.setState({ recent_drawn_card: this.drawnCards.pop() });
  }

  updateDrawnCards() {
    this.drawnCards.pop();
  }

  renderWastePiles() {
    return <WastePiles cards={this.deck.getWastePileCards()} />;
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
