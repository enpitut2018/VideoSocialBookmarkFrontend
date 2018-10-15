export default styles => `
  @media screen and (max-width:1200px) {
    ${"L" in styles && styles.L}
  }
  @media screen and (max-width:768px) {
    ${"M" in styles && styles.M}
  }
  @media screen and (max-width:480px) {
    ${"S" in styles && styles.S}
  }
`;
