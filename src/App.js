import React, { Component } from "react";
import "./App.css";

class Spade extends Component {
  getCard(number) {
    return (
      <div className="card">
        <div className="header">{number}</div>
        <div className="symbol">&#9824;</div>
        <div className="footer">{number}</div>
      </div>
    );
  }
}

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: <Game />
    };
  }

  renderGame() {
    return this.state.game;
  }

  render() {
    return (
      <div className="App">
        <div className="container">{this.renderGame()}</div>
      </div>
    );
  }
}

export default App;
