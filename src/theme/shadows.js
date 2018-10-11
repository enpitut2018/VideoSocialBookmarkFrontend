import palette from "./palette";

export const elevate = e => {
  return `
    box-shadow: 0 ${e * 0.4}px ${e * 1.3}px 1px ${palette.Black01};
  `;
};
