import React, { Component } from "react";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      classes: props.classes,
      draggable: props.draggable,
      onDragStart: props.onDragStart,
      onDrop: props.onDrop,
      onDragOver: props.onDragOver,
      number: props.number,
      symbol: props.symbol,
      title: props.title,
      associate_foundation: props.associate_foundation
    };
  }

  render() {
    return (
      <div
        data-associate_foundation={this.state.associate_foundation}
        title={this.state.title}
        id={this.state.id}
        className={this.state.classes}
        draggable={this.state.draggable}
        onDragStart={this.state.onDragStart}
        onDrop={this.state.onDrop}
        onDragOver={this.state.onDragOver}
      >
        <div className="header" id={this.state.id}>
          {this.state.number}
        </div>
        <div className="symbol" id={this.state.id}>
          {this.state.symbol}
        </div>
        <div className="footer" id={this.state.id}>
          {this.state.number}
        </div>
      </div>
    );
  }
}

export default Card;
