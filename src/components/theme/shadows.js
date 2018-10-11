import palette from "./palette";

export const elevate = e => {
  return `
    box-shadow: 0 ${e * 0.5}px ${e * 0.8}px 1px ${palette.Black01};
  `;
};
