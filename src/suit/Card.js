import React, { Component } from "react";
class Card extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        className={this.props.classes}
        draggable={this.props.draggable}
        onDragStart={this.props.onDragStart}
        onDrop={this.props.onDrop}
        onDragOver={this.props.onDragOver}
      >
        <div className="header">{this.props.number}</div>
        <div className="symbol">{this.props.symbol}</div>
        <div className="footer">{this.props.number}</div>
      </div>
    );
  }
}

export default Card;
