import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../atoms/Wrapper";
import AnkerStyle from "../atoms/AnkerStyle";
import Thumbnail from "../atoms/Thumbnail";
import Text from "../atoms/Text";
import { style, component } from "../mediaQuery";
import BookmarkButton from "./BookmarkButton";
import { connect } from "react-redux";
import { postBookmark, deleteBookmark } from "../../actions/BookmarkActions";

const StyledLink = styled(Link)`
  display: flex;

  justify-content: space-between;
  align-items: center;

  margin: 2px 0;

  ${AnkerStyle};

  ${style({
    S: `width: 98vw`,
    M: `width: 90vw`,
    L: `width: 90vw`,
    XL: `width: 800px`
  })};
`;

const StyledThumbnail = styled.div`
  ${style({
    S: `margin-right: 8px`,
    M: `margin-right: 12px`,
    L: `margin-right: 17px`,
    XL: `margin-right: 20px`
  })};
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 90px;
`;

const titleStyle = `
  overflow: hidden;
  white-space: normal;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -o-box-orient: vertical;
  -ms-box-orient: vertical;
  display: -webkit-box;
  display: -moz-box;
  display: -o-box;
  display: -ms-box;
  -webkit-line-clamp: 2;
  -moz-line-clamp: 2;
  -o-line-clamp: 2;
  -ms-line-clamp: 2;
`;

class TrendItem extends Component {
  bookmarkButton = () =>
    this.props.isSignedIn && (
      <BookmarkButton
        bookmarked={this.props.entry["bookmarked?"]}
        handleClick={() =>
          this.props.dispatch(
            this.props.entry["bookmarked?"]
              ? deleteBookmark(this.props.entry.id)
              : postBookmark(this.props.entry.id)
          )
        }
      />
    );

  render() {
    return (
      <StyledLink to={"/entries/" + this.props.entry.id}>
        <Wrapper>
          <StyledThumbnail>
            <Thumbnail
              src={this.props.entry.thumbnail_url}
              alt={this.props.entry.title}
              height="90px"
            />
          </StyledThumbnail>
          <StyledWrapper type="right" dir="column">
            {component({
              XL: (
                <>
                  <Text size="L" margin="0" css={titleStyle}>
                    {this.props.entry.title}
                  </Text>
                  <Wrapper>
                    <Text size="S" margin="0">
                      {this.props.entry.num_of_bookmarked}
                    </Text>
                    <Text size="XS" margin="0 0.2rem">
                      ブックマーク
                    </Text>
                    <this.bookmarkButton />
                  </Wrapper>
                </>
              ),
              L: (
                <>
                  <Text size="M" margin="0" css={titleStyle}>
                    {this.props.entry.title}
                  </Text>
                  <Wrapper>
                    <Text size="S" margin="0">
                      {this.props.entry.num_of_bookmarked}
                    </Text>
                    <Text size="XS" margin="0 0.2rem">
                      ブックマーク
                    </Text>
                    <this.bookmarkButton />
                  </Wrapper>
                </>
              ),
              M: (
                <>
                  <Text size="M" margin="0" css={titleStyle}>
                    {this.props.entry.title}
                  </Text>
                  <Wrapper>
                    <Text size="S" margin="0">
                      {this.props.entry.num_of_bookmarked}
                    </Text>
                    <Text size="XS" margin="0 0.1rem">
                      ブックマーク
                    </Text>
                    <this.bookmarkButton />
                  </Wrapper>
                </>
              ),
              S: (
                <>
                  <Text size="M" margin="0" css={titleStyle}>
                    {this.props.entry.title}
                  </Text>
                  <Wrapper>
                    <Text size="XS" margin="0">
                      {this.props.entry.num_of_bookmarked}
                    </Text>
                    <Text size="XS" margin="0">
                      ブックマーク
                    </Text>
                    <this.bookmarkButton />
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

export default connect(store => ({
  isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn
}))(TrendItem);
