import styled from "styled-components";

export const StyledProductList = styled.ul`
  display: grid;
  width: 100%;
  @media only screen and (min-width: 31.25em) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
  @media only screen and (min-width: 51em) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1em;
  }
`;
