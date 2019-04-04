import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderPile() {
    return <div className="card face-down-card" />;
  }

  render() {
    return (
      <div className="App">
        <div>{this.renderPile()}</div>
      </div>
    );
  }
}

export default App;
