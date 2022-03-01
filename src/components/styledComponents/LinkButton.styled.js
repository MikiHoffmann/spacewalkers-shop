import styled from "styled-components";

export const StyledLinkButton = styled.button`
  padding: 0.3em;
  background-color: ${({theme}) => theme.colors.btnBgClr};
  color: ${({theme}) => theme.colors.btnClr};
  border: none;
  box-shadow: ${({theme}) => theme.colors.boxShdwRght};
  cursor: pointer;
  &:hover {
    color: ${({theme}) => theme.colors.btnClrHvr};
    background-color: ${({theme}) => theme.colors.btnBgClrHvr};
  }
`;
