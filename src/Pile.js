import React, { Component } from "react";

class Pile extends Component {
  render() {
    return <div className="card face-down-card" onClick={this.props.onClick} />;
  }
}

export default Pile;
