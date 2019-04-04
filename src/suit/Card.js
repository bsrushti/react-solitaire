import React, { Component } from "react";
class Card extends Component {
  render() {
    return (
      <div className={this.props.classes}>
        <div className="header">{this.props.number}</div>
        <div className="symbol">{this.props.symbol}</div>
        <div className="footer">{this.props.number}</div>
      </div>
    );
  }
}

export default Card;
