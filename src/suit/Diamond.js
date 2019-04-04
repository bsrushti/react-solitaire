import React, { Component } from "react";
import Card from "./Card";

class Diamond extends Component {
  getCard(number) {
    return (
      <Card
        key={number}
        number={number}
        symbol="&#9830;"
        classes={"card red-cards"}
      />
    );
  }
}

export default Diamond;
