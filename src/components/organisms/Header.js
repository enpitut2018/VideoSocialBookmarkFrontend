import * as React from "react";
import Card from "../atoms/Card";
import Logo from "../atoms/Logo";

import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Link to="/">
        <Card type="between">
          <Logo />
        </Card>
      </Link>
    );
  }
}

export default Header;
