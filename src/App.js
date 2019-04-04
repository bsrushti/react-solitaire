import React, { Component } from "react";
import "./App.css";
import Game from "./Game";

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
