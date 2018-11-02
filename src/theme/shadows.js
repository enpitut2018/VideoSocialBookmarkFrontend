import colors from "./colors";

export default e => {
  let alpha = colors.Shadow.BaseAlpha;
  if (e !== 0) {
    alpha += 0.08 * (1.0 - colors.Shadow.BaseAlpha) * 80.0 ** (-1.0 / e);
  }
  return `
    filter: drop-shadow(0 ${e * 0.8}px ${e * 1.0 + 1}px rgba(${
    colors.Shadow.BaseColor
  }${alpha}));
  `;
};
