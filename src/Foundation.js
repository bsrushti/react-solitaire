import React, { Component } from "react";
import Card from "./suit/Card";

class Foundation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foundation_one: this.getFoundation("foundation_one"),
      foundation_two: this.getFoundation("foundation_two"),
      foundation_three: this.getFoundation("foundation_three"),
      foundation_four: this.getFoundation("foundation_four")
    };
  }

  getFoundation(id) {
    return (
      <Card
        classes="card"
        onDrop={this.drop.bind(this)}
        onDragOver={this.allowDrop.bind(this)}
        id={id}
      />
    );
  }

  drop(event) {
    let card = document.getElementById(event.dataTransfer.getData("card"));
    let foundation = document.getElementById(event.target.id);
    foundation.innerHTML = "";
    let id = card.id;
    let className = card.className;
    let number = card.childNodes[0].innerText;
    let symbol = card.childNodes[1].innerText;
    let pileCard = (
      <Card
        id={id}
        key={symbol + number}
        number={number}
        symbol={symbol}
        classes={className}
      />
    );
    const key = event.target.id;
    this.setState({ [key]: pileCard });
    this.props.updateCard(<Card id="pile-card" classes="card" />);
  }

  allowDrop(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="four-foundation" className="four-foundation">
        {this.state.foundation_one}
        {this.state.foundation_two}
        {this.state.foundation_three}
        {this.state.foundation_four}
      </div>
    );
  }
}

export default Foundation;
