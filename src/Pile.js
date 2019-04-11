import React, { Component } from "react";

class Pile extends Component {
  drag(event) {
    event.dataTransfer.setData("pile", this.props.id);
  }

  render() {
    return (
      <div
        pileid={this.props.title}
        onClick={this.props.onClick}
        id={this.props.id}
        draggable={true}
        onDragStart={this.drag.bind(this)}
        className={this.props.className}
        onDrop={this.props.drop}
        onDragOver={this.props.onDragOver}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Pile;
