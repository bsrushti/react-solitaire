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
        data-associate_foundation={title}
      />
    );
  }

  getCardNumberAndSymbol(card) {
    let number = card.childNodes[0].innerText;
    let symbol = card.childNodes[1].innerText;
    return { number, symbol };
  }

  getCardRankAndSuit(card) {
    card.id = card.id.split(" ")[0];
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
    let cardId = event.dataTransfer.getData("card");
    const card = document.getElementById(cardId);
    const { cardRank } = this.getCardRankAndSuit(card);
    if (!event.target.dataset.associate_foundation)
      event.target = event.target.parentElement;
    const foundationName = event.target.dataset.associate_foundation;
    let foundation = document.getElementById(event.target.id);
    if (this.isNotValid(card, foundation)) return;
    if (cardRank != 1 && foundation.innerHTML == "") return;
    let pileCard = this.getRecentStackedCard(foundationName, card);
    const key = foundationName;
    this.setState({ [key]: pileCard });
    let pileNumber = cardId.split(" ")[1];
    if (pileNumber) {
      this.props.updateWastePile(pileNumber);
      return;
    }
    this.props.updateCard();
  }

  getRecentStackedCard(foundationName, card) {
    card.className = card.className.replace("waste-pile-card", " ");
    const { number, symbol } = this.getCardNumberAndSymbol(card);
    return (
      <Card
        associate_foundation={foundationName}
        id={card.id}
        key={symbol + number}
        onDrop={this.drop.bind(this)}
        onDragOver={this.allowDrop.bind(this)}
        number={number}
        draggable={true}
        onDragStart={this.drag}
        symbol={symbol}
        className={card.className}
      />
    );
  }

  drag(event) {
    event.dataTransfer.setData("card", event.target.id);
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
