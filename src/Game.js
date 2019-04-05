import React, { Component } from "react";
import Pile from "./Pile";
import Card from "./suit/Card";
import Foundation from "./Foundation";

class Game extends Component {
  constructor(props) {
    super(props);
    this.pile = new Pile();
    this.state = {
      recent_drawn_card: <Card id="pile-card" classes="card" />
    };
  }

  getOneCard() {
    this.setState({ recent_drawn_card: this.pile.getOneCard() });
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

  render() {
    return (
      <div className="container">
        <div className="pile">
          <div title="pile">{this.renderPile()}</div>
          <div title="face-up-card-from-pile">
            {this.state.recent_drawn_card}
          </div>
        </div>
        <div>{this.renderFoundation()}</div>
      </div>
    );
  }
}

export default Game;
