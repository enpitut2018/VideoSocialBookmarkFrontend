import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import { Link } from "react-router-dom";

export default class RankingItem extends Component {
  render() {
    return (
      <Wrapper>
        <h3>
          <a target="_blank" rel="noopener noreferrer" href={this.props.url}>
            {this.props.url}
          </a>
        </h3>
      </Wrapper>
    );
  }
}
