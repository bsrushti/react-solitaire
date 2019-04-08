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

  getFoundation(title) {
    return (
      <div
        className="card"
        onDrop={this.drop.bind(this)}
        onDragOver={this.allowDrop.bind(this)}
        id={title}
        title={title}
      />
    );
  }

  getCardNumberAndSymbol(card) {
    let number = card.childNodes[0].innerText;
    let symbol = card.childNodes[1].innerText;
    return { number, symbol };
  }

  getCardRankAndSuit(card) {
    const cardSuit = card.id.split("_")[0];
    const cardRank = card.id.split("_")[1];
    return { cardSuit, cardRank };
  }

  isNotValid(card, foundation) {
    const { cardSuit, cardRank } = this.getCardRankAndSuit(card);
    const stackedCardSuit = foundation.id.split("_")[0];
    const stackedCardRank = foundation.id.split("_")[1];
    return (
      cardSuit != stackedCardSuit &&
      cardRank != stackedCardRank + 1 &&
      foundation.innerHTML
    );
  }

  drop(event) {
    const card = document.getElementById(event.dataTransfer.getData("card"));
    const { cardRank } = this.getCardRankAndSuit(card);
    if (!event.target.id) event.target = event.target.parentElement;
    let foundation = document.getElementById(event.target.id);
    if (this.isNotValid(card, foundation)) return;
    if (cardRank != 1 && foundation.innerHTML == "") return;
    let title = event.target.title;
    let pileCard = this.getRecentStackedCard(title, card);
    const key = event.target.title;
    this.setState({ [key]: pileCard });
    this.props.updateCard();
  }
  
  getRecentStackedCard(title, card) {
    const { number, symbol } = this.getCardNumberAndSymbol(card);
    return (
      <Card
        title={title}
        id={card.id}
        key={symbol + number}
        onDrop={this.drop.bind(this)}
        onDragOver={this.allowDrop.bind(this)}
        number={number}
        symbol={symbol}
        classes={card.className}
      />
    );
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
