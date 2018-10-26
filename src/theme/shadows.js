import colors from "./colors";
import palette from "./palette";

export default e => {
  return `
    filter: drop-shadow(0 ${e * 1.2 + 1}px ${e * 1.4 + 1}px ${
    palette[colors.Shadow]
  });
  `;
};
