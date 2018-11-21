import * as React from "react";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";
import PlaylistOverviewItem from "../molecules/PlaylistOverviewItem";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AnkerStyle from "../atoms/AnkerStyle";

const RootWrapper = styled(Wrapper)`
box-shadow: 0px 1px 1px 1px grey;
margin: 5px;
padding-top: 5px;
width: 90vw;
`;

const PlaylistWrapper = styled(Wrapper)`
overflow-x: scroll;
width: calc(90vw - 52px);
justify-content: left;
`;

const TitleWrapper = styled(Wrapper)`
width: calc(20vw);
`;

const StyledLink = styled(Link)`
  ${AnkerStyle};
`;

export default class PlaylistOverview extends React.Component {
  render() {
    return (
      <>
        <StyledLink to={"/playlist/" + this.props.playlist.id}>
          <RootWrapper dir="row">
            <TitleWrapper>
              <Text level="L" margin="10px 0 13px 0">
                { this.props.playlist.name }
              </Text>
            </TitleWrapper>
            <PlaylistWrapper dir="row">
              {this.props.playlist.playlist_items.map(item => (
                <PlaylistOverviewItem
                  entry={item.entry}
                  key={item.id}
                />
              ))}
            </PlaylistWrapper>
          </RootWrapper>
        </StyledLink>
      </>
    );
  }
}
