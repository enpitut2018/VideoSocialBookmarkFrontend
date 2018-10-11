import * as React from "react";
import Card from "../atoms/Card";
import Logo from "../atoms/Logo";

class Header extends React.Component {
  render() {
    return (
      <Card type="left">
        <Logo />
      </Card>
    );
  }
}

export default Header;
