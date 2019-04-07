import React, { Component } from "react";

class Pile extends Component {
  render() {
    return <div className={this.props.classes} onClick={this.props.onClick} />;
  }
}

export default Pile;
