import styled from "styled-components";

export const StyledProductCard = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 0.5em;
  width: 100%;
  margin: 1em 0;
  .itemTitle {
    grid-area: 1/1/2/11;
  }
  .itemPrice {
    grid-area: 1/9/2/11;
  }
  img {
    grid-area: 2/1/3/11;
    box-shadow: ${({theme}) => theme.colors.boxShdwRght};
  }
  .itemDescription {
    grid-area: 3/1/4/11;
  }
  button {
    grid-area: 4/9/5/11;
    cursor: pointer;
  }
`;
