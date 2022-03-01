import styled from "styled-components";

export const StyledNavBar = styled.nav`
  position: fixed;
  bottom: 1em;
  height: 3em;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-top: ${({ theme }) => theme.colors.brdrBlk};
  border-bottom: ${({ theme }) => theme.colors.brdrBlk};
  box-shadow: ${({ theme }) => theme.colors.boxShdwAll};
  z-index: 2000;
  a {
    position: relative;
    height: 70%;
    img {
      height: 100%;
      width: auto;
    }
    .cartCounterContainer {
      position: absolute;
      top: 0.25em;
      right: 0.5em;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1em;
      width: 1em;
      background-color: transparent;
      z-index: 1;
      .cartCounter {
        font-size: 0.6em;
        font-weight: bold;
        color: red;
      }
    }
  }
  @media only screen and (orientation: landscape) {
    top: 0;
    right: 1em;
    height: 100%;
    width: 3em;
    flex-direction: column;
    justify-content: space-evenly;
    a {
      height: auto;
      width: 70%;
      img {
        height: auto;
        width: 100%;
      }
    }
  }
`;
