import colors from "./colors";

export default e => {
  let alpha = colors.Shadow.BaseAlpha;
  if (e !== 0) {
    alpha += 0.12 * (1.0 - colors.Shadow.BaseAlpha) * 80.0 ** (-1.0 / e);
  }
  return `
    filter: drop-shadow(0 ${e * 1.2}px ${e * 0.4 + 3.0}px rgba(${
  colors.Shadow.BaseColor
}${alpha}));
  `;
};
