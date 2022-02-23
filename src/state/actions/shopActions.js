import * as actions from "./actionTypes";

export const addToCart = (cartItemID) => {
  return {
    type: actions.addToCart,
    payload: {
      id: cartItemID,
    },
  };
};

export const removeFromCart = (cartItemID) => {
  return {
    type: actions.removeFromCart,
    payload: {
      id: cartItemID,
    },
  };
};

export const decreaseQuantity = (cartItemID, value) => {
  return {
    type: actions.decreaseQuantity,
    payload: {
      id: cartItemID,
      qty: value,
    },
  };
};
export const increaseQuantity = (cartItemID, value) => {
  return {
    type: actions.increaseQuantity,
    payload: {
      id: cartItemID,
      qty: value,
    },
  };
};

export const displayCurrentItem = (itemID) => {
  return {
    type: actions.displayCurrentItem,
    payload: itemID,
  };
};
