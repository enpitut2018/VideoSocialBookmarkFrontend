import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import AnkerStyle from "../atoms/AnkerStyle";
import Thumbnail from "../atoms/Thumbnail";
import Text from "../atoms/Text";
import { component } from "../mediaQuery";

const StyledA = styled.a`
  display: flex;
  flex-direction: column;

  ${AnkerStyle};
`;

const StyledThumbnail = styled.div`
  margin: 10px 0;
`;

export default class ThreadTop extends Component {
  render() {
    return (
      <Wrapper dir="column">
        <StyledA
          target="_blank"
          rel="noopener noreferrer"
          href={this.props.thread.url}
        >
          <Wrapper dir="column">
            {component({
              XL: <Text level="XL">{this.props.thread.title}</Text>,
              L: <Text level="XL">{this.props.thread.title}</Text>,
              M: (
                <Text level="L" margin="17px 49px">
                  {this.props.thread.title}
                </Text>
              ),
              S: (
                <Text level="L" margin="17px 49px">
                  {this.props.thread.title}
                </Text>
              )
            })}
            <StyledThumbnail>
              <Thumbnail
                src={this.props.thread.img}
                alt={this.props.thread.title}
              />
            </StyledThumbnail>
          </Wrapper>
        </StyledA>

        <Text level="L">
          {this.props.thread.num_of_bookmarked + " "}
          Bookmarks
        </Text>
      </Wrapper>
    );
  }
}
