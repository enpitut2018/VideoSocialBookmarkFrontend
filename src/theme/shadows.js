import colors from "./colors";
import palette from "./palette";

export const elevate = e => {
  return `
    box-shadow: 0 ${e * 0.6}px ${e * 1.1}px 1px ${palette[colors.Shadow]};
  `;
};
