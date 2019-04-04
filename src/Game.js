import React, { Component } from "react";
import Pile from "./Pile";

class Game extends Component {
  constructor(props) {
    super(props);
    this.pile = new Pile();
    this.state = {
      card: <div id="pile-card" className="card" />
    };
  }

  renderPile() {
    return this.pile.renderPile();
  }

  getOneCard() {
    this.setState({ card: this.pile.getOneCard() });
  }

  renderCard() {
    return <Pile onClick={this.getOneCard.bind(this)} />;
  }

  render() {
    return (
      <div className="container">
        <div className="pile">
          <div>{this.renderCard()}</div>
          <div>{this.state.card}</div>
        </div>
      </div>
    );
  }
}

export default Game;
