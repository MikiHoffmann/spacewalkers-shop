import styled from "styled-components";

export const StyledPageTitle = styled.div`
  position: sticky;
  top: 6.2em;
  display: inline-block;
  height: auto;
  width: 100%;
  padding: 0.2em;
  border-top: ${({theme}) => theme.colors.brdrWht};
  border-bottom: ${({theme}) => theme.colors.brdrWht};
  box-shadow: ${({ theme }) => theme.colors.boxShdwAll};
  font-weight: bold;
  text-align: center;
  z-index: 1300;
`;
