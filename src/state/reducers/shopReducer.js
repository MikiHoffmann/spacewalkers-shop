import { initialState } from "../initialState";
import * as actions from "../actions/actionTypes";

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.addToCart:
      console.log("state:", initialState);
      const cartItem = state.products.find(
        (product) => product.id === action.payload.id
      );
      const inCart = state.cartItems.find((cartItem) =>
        cartItem.id === action.payload.id ? true : false
      );
      console.log("cartItem:", cartItem);
      console.log("inCart:", inCart);
      return {
        ...state,
        cartItems: inCart
          ? state.cartItems.map((cartItem) =>
              cartItem.id === action.payload.id
                ? { ...cartItem, qty: cartItem.qty + 1 }
                : cartItem
            )
          : [...state.cartItems, { ...cartItem, qty: 1 }],
      };

    case actions.removeFromCart:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case actions.decreaseQuantity:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, qty: cartItem.qty - 1 }
            : cartItem
        ),
      };
      case actions.increaseQuantity:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        ),
      };
    case actions.displayCurrentItem:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};
