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
    this.pileCards = this.deck.getPileCards();
    this.state = {
      recent_drawn_card: <Card id="pile-card" classes="card" />
    };
  }

  getOneCard() {
    this.setState({ recent_drawn_card: this.pileCards.pop() });
  }

  renderPile() {
    return <Pile onClick={this.getOneCard.bind(this)} />;
  }

  renderFoundation() {
    return <Foundation updateCard={this.updateRecentDrawnCards.bind(this)} />;
  }

  updateRecentDrawnCards(state) {
    this.setState({ recent_drawn_card: state });
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
