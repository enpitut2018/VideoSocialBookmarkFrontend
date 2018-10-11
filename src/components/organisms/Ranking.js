import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import RankingItem from "./RankingItem";

export default class Ranking extends Component {
  render() {
    return (
      <Wrapper dir="column">
        <h2>Ranking</h2>
        <Wrapper dir="column">
          <RankingItem url="https://www.google.com" />
          <RankingItem url="https://www.google.com" />
        </Wrapper>
      </Wrapper>
    );
  }
}
