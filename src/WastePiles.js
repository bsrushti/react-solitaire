import React, { Component } from "react";

class WastePiles extends Component {
  constructor(props) {
    super(props);
    this.cards = this.props.cards;
    this.state = {
      pile_1: this.setWastePiles(1),
      pile_2: this.setWastePiles(2),
      pile_3: this.setWastePiles(3),
      pile_4: this.setWastePiles(4),
      pile_5: this.setWastePiles(5),
      pile_6: this.setWastePiles(6),
      pile_7: this.setWastePiles(7)
    };
  }

  renderPiles() {
    let piles = [];
    Object.keys(this.state).forEach(pile => {
      piles.push(this.state[pile]);
    });
    return piles;
  }

  setWastePiles(number) {
    return <div key={number}>{this.cards.splice(0, number)}</div>;
  }

  render() {
    return (
      <div id="waste-piles" className="waste-piles">
        {this.renderPiles()}
      </div>
    );
  }
}

export default WastePiles;
