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

export default class EntryTop extends Component {
  render() {
    return (
      <Wrapper dir="column">
        <StyledA
          target="_blank"
          rel="noopener noreferrer"
          href={this.props.entry.url}
        >
          <Wrapper dir="column">
            {component({
              XL: <Text level="XL">{this.props.entry.title}</Text>,
              L: <Text level="XL">{this.props.entry.title}</Text>,
              M: (
                <Text level="L" margin="17px 49px">
                  {this.props.entry.title}
                </Text>
              ),
              S: (
                <Text level="L" margin="17px 49px">
                  {this.props.entry.title}
                </Text>
              )
            })}
            <StyledThumbnail>
              <Thumbnail
                src={this.props.entry.img}
                alt={this.props.entry.title}
              />
            </StyledThumbnail>
          </Wrapper>
        </StyledA>

        <Text level="L">
          {this.props.entry.num_of_bookmarked + " "}
          Bookmarks
        </Text>
      </Wrapper>
    );
  }
}
