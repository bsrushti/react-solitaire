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

  isFaceDownCard(pileId, cardIndex) {
    return this.state[pileId][cardIndex - 1].props.className.match(
      /face-down-card/
    );
  }

  getCards(card, draggedPileNumber, pileNumber) {
    if (!draggedPileNumber) return;
    let cardId = card.id;
    let pileId = "pile_" + draggedPileNumber;
    let pile = this.state[pileId];
    let cardIndex = 0;
    for (let index = 0; index < pile.length; index++) {
      if (pile[index].props.id == cardId) {
        cardIndex = index;
      }
    }
    let pileCards = pile.slice(0, cardIndex);
    if (!cardIndex - 1 < 0 && this.isFaceDownCard(pileId, cardIndex)) {
      pileCards.pop();
      let newCard = this.cards.pop();
      pileCards.push(this.getCard(draggedPileNumber, newCard));
    }
    let draggedCards = pile.slice(cardIndex);
    this.setState({ [pileId]: pileCards.slice() });
    return draggedCards.map(this.getCard.bind(this, pileNumber));
  }

  drop(event) {
    let droppedPileNumber = event.target.id.split(" ").pop();
    let droppedPileId = "pile_" + droppedPileNumber;
    let card = document.getElementById(event.dataTransfer.getData("card"));
    let draggedPileNumber = card.id.split(" ")[1];
    let pileCard = this.state[droppedPileId][
      this.state[droppedPileId].length - 1
    ];
    if (
      this.isOfSameColor(pileCard, card) ||
      !this.isRankGreaterThanPileCard(pileCard, card)
    )
      return;
    let draggedCards = this.getCards(
      card,
      draggedPileNumber,
      droppedPileNumber
    );
    if (!draggedCards) {
      draggedCards = this.getCard(droppedPileNumber, card);
      this.props.updateCard();
    }
    let cards = this.state[droppedPileId].concat(draggedCards);
    this.setState({ [droppedPileId]: cards.slice() });
  }

  isOfSameColor(pileCard, draggedCard) {
    return !(
      (pileCard.props.className.match(/red-cards/) &&
        !draggedCard.className.match(/red-cards/)) ||
      (!pileCard.props.className.match(/red-cards/) &&
        draggedCard.className.match(/red-cards/))
    );
  }

  isRankGreaterThanPileCard(pileCard, draggedCard) {
    const rankOfPileCard = +pileCard.props.id.split(" ")[0].split("_")[1];
    const rankOfDraggedCard = +draggedCard.id.split(" ")[0].split("_")[1];
    return rankOfPileCard == (rankOfDraggedCard + 1);
  }

  getCardNumberAndSymbol(card) {
    let number = card.childNodes[0].innerText;
    let symbol = card.childNodes[1].innerText;
    return { number, symbol };
  }

  getCard(pileNumber, card) {
    if (card.props) card = card.props;
    else {
      let { number, symbol } = this.getCardNumberAndSymbol(card);
      card.number = number;
      card.symbol = symbol;
    }
    return (
      <Card
        id={card.id + " " + pileNumber}
        key={card.id + " " + pileNumber}
        number={card.number}
        symbol={card.symbol}
        className={card.className + " waste-pile-card"}
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
