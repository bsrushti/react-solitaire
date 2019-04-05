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
    Object.keys(this.state).forEach((pile, index) => {
      piles.push(
        <div key={index} className="waste-pile">
          {this.state[pile]}
        </div>
      );
    });
    return piles;
  }

  getPlayableCardDiv(index, card) {
    return (
      <div key={index} className="waste-pile-card">
        {card}
      </div>
    );
  }

  getUnplayableCardDiv(index) {
    return <div key={index} className="waste-pile-card face-down-card card" />;
  }

  getCardDiv(number, card, element, index) {
    if (index === number - 1) {
      return this.getPlayableCardDiv(index, card);
    }
    return this.getUnplayableCardDiv(index);
  }

  setWastePiles(number) {
    let card = this.cards.pop();
    return new Array(number)
      .fill("")
      .map(this.getCardDiv.bind(this, number, card));
  }

  setPlayableCards() {
    this.setState({
      pile_1: this.state.pile_1.splice(
        this.state.pile_1.length,
        1,
        this.cards.pop()
      )
    });
    return;
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
