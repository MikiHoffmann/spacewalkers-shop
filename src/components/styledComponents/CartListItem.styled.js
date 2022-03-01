import styled from "styled-components";

export const StyledCartListItem = styled.li`
  display: grid;
  grid-template-rows: repeat(3, 1.5em);
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 0.5em;
  width: 100%;
  margin-top: 1em;
  border-top: ${({ theme }) => theme.colors.brdrWht};
  .itemImgContainer {
    grid-area: 1/1/4/5;
    aspect-ratio: 8/5;
    box-shadow: ${({ theme }) => theme.colors.boxShdwRght};
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .itemTitle {
    grid-area: 1/5/2/11;
  }
  .qtyDisplay {
    grid-area: 2/5/3/8;
  }
  .decreaseButton {
    grid-area: 2/8/3/9;
    background-color: red;
    color: white;
    cursor: pointer;
  }
  .increaseButton {
    grid-area: 2/9/3/10;
    background-color: green;
    color: white;
    cursor: pointer;
  }
  .deleteButton {
    grid-area: 2/10/3/11;
      height: 100%;
      width: auto;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: red;
    }
  }
  .detailsButton {
    grid-area: 3/2/4/6;
  }
  .itemPrice {
    grid-area: 3/5/4/11;
    text-align: right;
  }
`;
