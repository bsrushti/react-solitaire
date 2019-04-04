import React, { Component } from "react";

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

export default Spade;
