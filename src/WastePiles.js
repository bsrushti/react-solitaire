import React, { Component } from "react";
import Pile from "./Pile";
import Card from "./suit/Card";

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

  getCards(cardId, pileId, pileNumber) {
    let pile = this.state[pileId];
    let cardIndex = 0;
    for (let index = 0; index < pile.length; index++) {
      if (pile[index].props.id == cardId) {
        cardIndex = index;
      }
    }
    let draggedCards = pile.slice(cardIndex);
    let pileCards = pile.slice(0, cardIndex);
    this.setState({ [pileId]: pileCards });
    return draggedCards.map(this.getCard.bind(this, pileNumber));
  }

  drop(event) {
    let droppedPileNumber = event.target.id.split(" ").pop();
    let droppedPileId = "pile_" + droppedPileNumber;
    let card = document.getElementById(event.dataTransfer.getData("card"));
    let draggedPileNumber = card.id.split(" ").pop();
    let draggedPileId = "pile_" + draggedPileNumber;
    let draggedCards = this.getCards(card.id, draggedPileId, droppedPileNumber);
    draggedCards = this.state[droppedPileId].concat(draggedCards);
    this.setState({ [droppedPileId]: draggedCards.slice() });
  }

  getCardNumberAndSymbol(card) {
    let number = card.childNodes[0].innerText;
    let symbol = card.childNodes[1].innerText;
    return { number, symbol };
  }

  getCard(pileNumber, card) {
    return (
      <Card
        id={card.props.id + " " + pileNumber}
        key={card.props.symbol + card.props.number}
        onDrop={this.drop.bind(this)}
        onDragOver={this.allowDrop.bind(this)}
        number={card.props.number}
        symbol={card.props.symbol}
        classes={card.props.classes + " waste-pile-card"}
        draggable={true}
        onDragStart={this.drag.bind(this)}
      />
    );
  }

  drag(event) {
    let cardId = event.target.id;
    event.dataTransfer.setData("card", cardId);
  }

  renderPiles() {
    let piles = [];
    Object.keys(this.state).forEach((pile, index) => {
      piles.push(
        <Pile
          key={index + 1}
          id={index + 1}
          className="waste-pile "
          onDrop={this.drop.bind(this)}
          onDragOver={this.allowDrop}
          value={this.state[pile]}
        />
      );
    });
    return piles;
  }

  allowDrop(event) {
    event.preventDefault();
  }

  getPlayableCardDiv(index, card) {
    return this.getCard(++index, card);
  }

  getUnplayableCardDiv(index) {
    return (
      <div
        key={index}
        draggable={false}
        className="waste-pile-card face-down-card card"
      />
    );
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
      <div
        id="waste-piles"
        className="waste-piles"
        onDrop={this.drop.bind(this)}
        onDragOver={this.allowDrop}
      >
        {this.renderPiles()}
      </div>
    );
  }
}

export default WastePiles;
