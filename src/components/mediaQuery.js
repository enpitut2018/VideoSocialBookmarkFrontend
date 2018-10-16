import React from "react";
import Media from "react-media";

const width = {
  L: 1000,
  M: 768,
  S: 480
};

export const component = components => (
  <>
    {"XL" in components && (
      <Media query={`(min-width: ${width.L}px)`} render={() => components.XL} />
    )}
    {"L" in components && (
      <Media
        query={`(min-width: ${width.M}px) and (max-width: ${width.L - 1}px)`}
        render={() => components.L}
      />
    )}
    {"M" in components && (
      <Media
        query={`(min-width: ${width.S}px) and (max-width: ${width.M - 1}px)`}
        render={() => components.M}
      />
    )}
    {"S" in components && (
      <Media
        query={`(max-width: ${width.S - 1}px)`}
        render={() => components.S}
      />
    )}
  </>
);

export const style = styles => `
  @media screen and (min-width: ${width.L}px) {
    ${"XL" in styles && styles.XL}
  }
  @media screen and (min-width: ${width.M}px) and (max-width:${width.L - 1}px) {
    ${"L" in styles && styles.L}
  }
  @media screen and (min-width: ${width.S}) and (max-width:${width.M - 1}px) {
    ${"M" in styles && styles.M}
  }
  @media screen and (max-width:${width.S - 1}px) {
    ${"S" in styles && styles.S}
  }
`;
