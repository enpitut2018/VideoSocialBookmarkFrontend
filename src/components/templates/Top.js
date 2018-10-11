import * as React from "react";
import Button from "../atoms/Button";
import Header from "../organisms/Header";

// import ContentWrapper from "../organisms/ContentWrapper";
// import Header from "../organisms/Header";
// import Stream from "../organisms/Stream";

export default class Top extends React.Component<{}> {
  render() {
    return (
      <>
        <Header />
        <Button />
      </>
      // <>
      //   <Header />
      //   <ContentWrapper>
      //     <Stream />
      //   </ContentWrapper>
      // </>
    );
  }
}
