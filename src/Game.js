import React, { Component } from "react";
import Pile from "./Pile";
import Card from "./suit/Card";

class Game extends Component {
  constructor(props) {
    super(props);
    this.pile = new Pile();
    this.state = {
      card: <div id="pile-card" className="card" />,

      foundation_one: this.getFoundation("foundation_one"),
      foundation_two: this.getFoundation("foundation_two"),
      foundation_three: this.getFoundation("foundation_three"),
      foundation_four: this.getFoundation("foundation_four")
    };
  }

  getFoundation(id) {
    return (
      <Card
        classes="card"
        onDrop={this.drop.bind(this)}
        onDragOver={this.allowDrop.bind(this)}
        id={id}
      />
    );
  }

  getOneCard() {
    this.setState({ card: this.pile.getOneCard() });
  }

  renderPile() {
    return <Pile onClick={this.getOneCard.bind(this)} />;
  }

  drop(event) {
    let card = document.getElementById(event.dataTransfer.getData("card"));
    let foundation = document.getElementById(event.target.id);
    foundation.innerHTML = "";
    let id = card.id;
    let className = card.className;
    let number = card.childNodes[0].innerText;
    let symbol = card.childNodes[1].innerText;
    let pileCard = (
      <Card
        id={id}
        key={symbol + number}
        number={number}
        symbol={symbol}
        classes={className}
      />
    );
    const key = event.target.id;
    this.setState({ [key]: pileCard });
    this.setState({ card: <div id="pile-card" className="card" /> });
  }

  allowDrop(event) {
    event.preventDefault();
  }

  renderFoundation() {
    return (
      <div id="four-foundation" className="four-foundation">
        {this.state.foundation_one}
        {this.state.foundation_two}
        {this.state.foundation_three}
        {this.state.foundation_four}
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
        <div />
        <div>{this.renderFoundation()}</div>
      </div>
    );
  }
}

export default Game;
