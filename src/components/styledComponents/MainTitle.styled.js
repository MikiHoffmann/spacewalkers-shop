import styled from "styled-components";

export const StyledMainTitle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: .5em;
  text-align: center;
  span:nth-of-type(2) {
    padding: .2em;
  }
  @media only screen and (min-width: 31.25em) {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;
