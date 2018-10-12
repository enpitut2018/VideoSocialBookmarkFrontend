export const sizes = {
  Small: "(max-width:480px)",
  Medium: "(min-width:480px) and (max-width:1024px)",
  Large: "(min-width:1024px)"
};

export default targetStyleJson => `
  @media screen and ${sizes["Small"]} {
    ${targetStyleJson["Small"]}
  }
  @media screen and ${sizes["Medium"]} {
    ${targetStyleJson["Medium"]}
  }
  @media screen and ${sizes["Large"]} {
    ${targetStyleJson["Large"]}
  }
`;
