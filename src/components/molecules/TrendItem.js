import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../atoms/Wrapper";
import AnkerStyle from "../atoms/AnkerStyle";
import Thumbnail from "../atoms/Thumbnail";
import Text from "../atoms/Text";
import { style, component } from "../mediaQuery";

const StyledLink = styled(Link)`
  display: flex;

  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 90px;
  margin: 10px 0;

  ${AnkerStyle};
`;

const StyledThumbnail = styled.div`
  margin: 10px 20px 10px 0px;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 90px;

  ${style({
    S: `max-width: 300px`,
    M: `max-width: 400px`,
    L: `max-width: 500px`,
    XL: `max-width: 800px`
  })};
`;

export default class TrendItem extends Component {
  render() {
    return (
      <StyledLink to={"/entries/" + this.props.entry.id}>
        <Wrapper>
          {this.props.trend &&
            component({
              XL: <Text level="XL">{String(this.props.trend) + ". "}</Text>,
              L: <Text level="L">{String(this.props.trend) + ". "}</Text>,
              M: <Text level="M">{String(this.props.trend) + ". "}</Text>,
              S: <Text level="M">{String(this.props.trend) + ". "}</Text>
            })}
          <StyledThumbnail>
            <Thumbnail
              src={this.props.entry.thumbnail_url}
              alt={this.props.entry.title}
            />
          </StyledThumbnail>
          <StyledWrapper type="right" dir="column">
            {component({
              XL: (
                <>
                  <Text level="L" margin="0">
                    {this.props.entry.title}
                  </Text>
                  <Wrapper>
                    <Text level="S" margin="0">
                      {this.props.entry.num_of_bookmarked}
                    </Text>
                    <Text level="XS" margin="0">
                      Bookmarks
                    </Text>
                  </Wrapper>
                </>
              ),
              L: (
                <>
                  <Text level="M" margin="0" fontSize="14pt">
                    {this.props.entry.title}
                  </Text>
                  <Wrapper>
                    <Text level="S" margin="0">
                      {this.props.entry.num_of_bookmarked}
                    </Text>
                    <Text level="XS" margin="0">
                      Bookmarks
                    </Text>
                  </Wrapper>
                </>
              ),
              M: (
                <>
                  <Text level="M" margin="0">
                    {this.props.entry.title}
                  </Text>
                  <Wrapper>
                    <Text level="S" margin="0">
                      {this.props.entry.num_of_bookmarked}
                    </Text>
                    <Text level="XS" margin="0">
                      Bookmarks
                    </Text>
                  </Wrapper>
                </>
              ),
              S: (
                <>
                  <Text level="M" margin="0">
                    {this.props.entry.title}
                  </Text>
                  <Wrapper>
                    <Text level="S" margin="0">
                      {this.props.entry.num_of_bookmarked}
                    </Text>
                    <Text level="XS" margin="0">
                      Bookmarks
                    </Text>
                  </Wrapper>
                </>
              )
            })}
          </StyledWrapper>
        </Wrapper>
      </StyledLink>
    );
  }
}
