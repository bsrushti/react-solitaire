import React, { Component } from "react";

class Pile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="card face-down-card" onClick={this.props.onClick} />;
  }
}

export default Pile;
