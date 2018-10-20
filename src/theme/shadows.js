import colors from "./colors";
import palette from "./palette";

export const elevate = e => {
  return `
    box-shadow: 0 ${e * 1.2}px ${e * 1.4}px ${e * 0.2 + 1.0}px ${
    palette[colors.Shadow]
  };
  `;
};
