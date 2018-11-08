import React, { Component } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import Text from "../atoms/Text";
import { style } from "../mediaQuery";
import elevate from "../../theme/shadows";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon
} from "react-share";
import ArrowBackIcon from "../../assets/images/material-icon/baseline-arrow_back-24px.svg";
import AnkerStyle from "../atoms/AnkerStyle";
import Thumbnail from "../atoms/Thumbnail";
import config from "../../config";

const StyledWrapper = styled(Wrapper)`
  margin: 20px auto 10px auto;
  width: 100%;
  ${style({
    S: `margin-top: 10px`,
    M: `margin-top: 12px`,
    L: `margin-top: 16px`,
    XL: `margin-top: 20px`
  })};
`;

const ArrowBackIconWrapper = styled.div`
  padding: 1rem;
  margin: 0 0.5rem;

  ${AnkerStyle};
  ${elevate(2)};

  &:hover {
    ${elevate(4)};
  }
  &:active {
    ${elevate(0)};
  }
`;

export default class SNSShareForm extends Component {
  render() {
    const entryUrl = `${config.frontend_base_url}/entries/${
      this.props.entry.id
    }`;
    return (
      <StyledWrapper dir="column">
        <Wrapper
          type="left"
          css={`
            width: 100%;
            justify-content: flex-start;
            align-items: flex-start;
          `}
        >
          <ArrowBackIconWrapper onClick={this.props.handleBack}>
            <ArrowBackIcon />
          </ArrowBackIconWrapper>
          <Text size="L" margin="10px 0">
            {this.props.headerTitle}
          </Text>
        </Wrapper>

        <Wrapper dir="column" css="width: 90%">
          <Link
            to={`/entries/${this.props.entry.id}`}
            style={{ textDecoration: "none" }}
          >
            <Text
              margin="0.8rem 0 0.5rem 0"
              css={`
                text-align: center;
                ${AnkerStyle};
              `}
            >
              {this.props.entry.title}
            </Text>

            <Thumbnail
              src={this.props.entry.thumbnail_url}
              alt={this.props.entry.title}
              width="100%"
            />
          </Link>
        </Wrapper>

        <Wrapper
          css={`
            margin: 1.4rem 1rem 1rem 1rem;
            width: 80%;
            justify-content: space-around;
          `}
        >
          <TwitterShareButton
            url={entryUrl}
            title={this.props.entry.title}
            style={{ cursor: "pointer" }}
          >
            <TwitterIcon size={48} round />
          </TwitterShareButton>
          <FacebookShareButton
            url={entryUrl}
            quote={this.props.entry.title}
            style={{ cursor: "pointer" }}
          >
            <FacebookIcon size={48} round />
          </FacebookShareButton>
          <RedditShareButton
            url={entryUrl}
            title={this.props.entry.title}
            style={{ cursor: "pointer" }}
          >
            <RedditIcon size={48} round />
          </RedditShareButton>
        </Wrapper>
      </StyledWrapper>
    );
  }
}
