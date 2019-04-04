import React, { Component } from "react";
import Pile from "./Pile";
import Card from "./suit/Card";

class Game extends Component {
  constructor(props) {
    super(props);
    this.pile = new Pile();
    this.state = {
      card: <div id="pile-card" className="card" />
    };
  }

  getOneCard() {
    this.setState({ card: this.pile.getOneCard() });
  }

  renderPile() {
    return <Pile onClick={this.getOneCard.bind(this)} />;
  }

  renderFoundation() {
    return (
      <div className="four-foundation">
        <Card classes="card" />
        <Card classes="card" />
        <Card classes="card" />
        <Card classes="card" />
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="pile">
          <div title="pile">{this.renderPile()}</div>
          <div title="face-up-card-from-pile">{this.state.card}</div>
        </div>
        <div title="four-foundations">{this.renderFoundation()}</div>
      </div>
    );
  }
}

export default Game;
