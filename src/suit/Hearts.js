import React, { Component } from "react";
import Card from "./Card";

class Hearts extends Component {
  getCard(number) {
    return (
      <Card
        key={number}
        number={number}
        symbol="&#9829;"
        classes={"card red-cards"}
      />
    );
  }
}

export default Hearts;
