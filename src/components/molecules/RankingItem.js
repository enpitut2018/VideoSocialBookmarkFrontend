import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import { Link } from "react-router-dom";

export default class RankingItem extends Component {
  render() {
    return (
      <Wrapper>
        <h3>
          <Link to={"/threads/" + this.props.thread.id}>
            {this.props.thread.url}
          </Link>
        </h3>
      </Wrapper>
    );
  }
}
