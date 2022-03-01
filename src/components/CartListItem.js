import { useDispatch } from "react-redux";
//import { useState } from "react";
import { StyledCartListItem } from "../components/styledComponents/CartListItem.styled";
import { StyledLinkButton } from "../components/styledComponents/LinkButton.styled";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../state/actions/shopActions";

const CartListItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const itemTotalPrice = cartItem.price * cartItem.qty;

  const onDecrease = () => {
    dispatch(decreaseQuantity(cartItem.id, cartItem.qty));
    if (cartItem.qty <= 1) {
      dispatch(removeFromCart(cartItem.id));
    }
  };
  const onIncrease = () => {
    dispatch(increaseQuantity(cartItem.id, cartItem.qty));
  };
  return (
    <StyledCartListItem>
      <span className="itemTitle">{cartItem.name}</span>
      <span className="qtyDisplay">nr of items: {cartItem.qty}</span>
      <div className="itemImgContainer">
        <img src={`../images/productImg/${cartItem.img}`} alt={cartItem.name} />
      </div>

      <StyledLinkButton className="decreaseButton" onClick={onDecrease}>
        -
      </StyledLinkButton>
      <StyledLinkButton className="increaseButton" onClick={onIncrease}>
        +
      </StyledLinkButton>

      <img
        src="../images/icons/iconDelete.png"
        alt="delete icon"
        className="deleteButton"
        onClick={() => {
          dispatch(removeFromCart(cartItem.id));
        }}
      />
      <StyledLinkButton className="detailsButton">
        view details
      </StyledLinkButton>
      <span className="itemPrice">total: {itemTotalPrice} money</span>
    </StyledCartListItem>
  );
};

export default CartListItem;
