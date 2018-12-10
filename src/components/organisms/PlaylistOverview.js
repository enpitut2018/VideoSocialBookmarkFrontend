import * as React from "react";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";
import PlaylistOverviewItem from "../molecules/PlaylistOverviewItem";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AnkerStyle from "../atoms/AnkerStyle";
import PlaylistPlayIcon from "../../assets/images/material-icon/baseline-playlist_play-24px.svg";
import { style } from "../mediaQuery";
import palette from "../../theme/palette";
import colors from "../../theme/colors";

const RootWrapper = styled(Wrapper)`
  border-radius: 2px;
  margin-bottom: 20px;
  justify-content: left;

  ${style({
    S: `width: 98vw`,
    M: `width: 90vw`,
    L: `width: 90vw`,
    XL: `width: 800px`
  })};
`;

const PlaylistWrapper = styled(Wrapper)`
  overflow-x: scroll;
  justify-content: left;
`;

const TitleWrapper = styled(Wrapper)`
  margin: auto 1.5rem auto 0.8rem;
`;

const StyledLink = styled(Link)`
  ${AnkerStyle};
`;

export default class PlaylistOverview extends React.Component {
  render() {
    const firstItem = this.props.playlist.playlist_items.find(
      item => item.prev_id === null
    );
    return (
      this.props.playlist.playlist_items.length > 0 && (
        <>
          <StyledLink
            to={`/entries/${firstItem.entry.id}?list=${this.props.playlist.id}`}
          >
            <RootWrapper dir="row">
              <TitleWrapper>
                <Wrapper dir="column">
                  <Wrapper>
                    <PlaylistPlayIcon
                      fill={palette[colors.organisms.Header.Icon.Fill]}
                      width="28px"
                      height="28px"
                    />
                    <Text size="L" margin="10px 0 13px 0">
                      {this.props.playlist.name}
                    </Text>
                  </Wrapper>
                  <Text size="M" margin="10px 0 13px 0">
                    {this.props.playlist.playlist_items.length}本の動画
                  </Text>
                </Wrapper>
              </TitleWrapper>
              <PlaylistWrapper dir="row">
                {this.props.playlist.playlist_items.map(item => (
                  <PlaylistOverviewItem entry={item.entry} key={item.id} />
                ))}
              </PlaylistWrapper>
            </RootWrapper>
          </StyledLink>
        </>
      )
    );
  }
}
