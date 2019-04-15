import lodash from "lodash";
import Spade from "./suit/Spade";
import Diamond from "./suit/Diamond";
import Clubs from "./suit/Clubs";
import Hearts from "./suit/Hearts";

class Deck {
  constructor() {
    this.suits = {
      spades: new Spade(),
      diamonds: new Diamond(),
      clubs: new Clubs(),
      hearts: new Hearts()
    };
    this.deck = lodash.shuffle(this.getDeck());
  }

  getDeck() {
    return this.getAllCardsOfSuit("spades").concat(
      this.getAllCardsOfSuit("diamonds").concat(
        this.getAllCardsOfSuit("hearts").concat(this.getAllCardsOfSuit("clubs"))
      )
    );
  }

  getNumberCards(suit) {
    let cards = [];
    for (let i = 2; i <= 10; i++) {
      cards.push(this.suits[suit].getCard(i));
    }
    return cards;
  }

  getAllCardsOfSuit(suit) {
    let cards = [];
    let aceCard = this.suits[suit].getAce();
    let numberCards = this.getNumberCards(suit);
    let faceCards = this.suits[suit].getAllFaceCards();
    cards.push(aceCard);
    cards = cards.concat(numberCards);
    cards = cards.concat(faceCards);
    return cards;
  }

  getPileCards() {
    let cards = this.deck.slice(0, 24);
    return cards;
  }

  getWastePileCards() {
    let cards = this.deck.slice(24);
    return cards;
  }
}

export default Deck;
