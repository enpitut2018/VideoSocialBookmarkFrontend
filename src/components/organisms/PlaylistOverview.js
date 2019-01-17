import * as React from "react";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";
import PlaylistOverviewItem from "../molecules/PlaylistOverviewItem";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AnkerStyle from "../atoms/AnkerStyle";
import PlaylistPlayIcon from "../../assets/images/material-icon/baseline-playlist_play-24px.svg";
import PlaylistAddIcon from "../../assets/images/material-icon/baseline-playlist_add-24px.svg";
import { style } from "../mediaQuery";
import palette from "../../theme/palette";
import colors from "../../theme/colors";
import DropdownPlyalistMoreMenu from "./DropdownPlyalistMoreMenu";
import store from "../../store";
import { savePlaylist } from "../../actions/PlaylistActions";

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
  min-width: 120px;
`;

const StyledLink = styled(Link)`
  ${AnkerStyle};
`;

const AddPlaylist = styled(Wrapper)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${props => (props.hover ? "50%" : "0%")};

  transition: all 100ms ease-in-out;

  font-weight: bold;
  background: ${palette.Black00};
`;

export default class PlaylistOverview extends React.Component {
  state = {
    hover: false
  };

  render() {
    const firstItem = this.props.playlist.playlist_items.find(
      item => item.prev_id === null
    );
    return (
      this.props.playlist.playlist_items.length > 0 && (
        <RootWrapper
          onMouseOver={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
          css={`
            align-items: flex-start;
          `}
        >
          <StyledLink
            to={`/entries/${firstItem.entry.id}?list=${this.props.playlist.id}`}
          >
            <RootWrapper
              dir="row"
              css={`
                width: 600px;
              `}
            >
              <TitleWrapper>
                <Wrapper
                  dir="column"
                  style={{
                    width: "100%",
                    position: "relative"
                  }}
                >
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

                  {!this.props.isMine && (
                    <AddPlaylist
                      hover={this.state.hover}
                      onClick={e => {
                        e.stopPropagation();
                        e.preventDefault();

                        store.dispatch(savePlaylist(this.props.playlist.id));
                      }}
                    >
                      <PlaylistAddIcon
                        fill={palette.White00}
                        width="28px"
                        height="28px"
                      />
                      <Text
                        size="M"
                        margin="10px 0 13px 0"
                        color={palette.White00}
                        fontWeight="bold"
                      >
                        保存
                      </Text>
                    </AddPlaylist>
                  )}
                </Wrapper>
              </TitleWrapper>

              <PlaylistWrapper>
                {this.props.playlist.playlist_items.map(item => (
                  <PlaylistOverviewItem entry={item.entry} key={item.id} />
                ))}
              </PlaylistWrapper>
            </RootWrapper>
          </StyledLink>

          <Wrapper
            css={`
              margin: 1rem;
              margin-top: 0.1rem;
            `}
          >
            {this.props.isMine && (
              <DropdownPlyalistMoreMenu playlist={this.props.playlist} />
            )}
          </Wrapper>
        </RootWrapper>
      )
    );
  }
}
