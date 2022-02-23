const productsData = require("../data/productsData.json");

export const initialState = {
  shop: {
    products: productsData.products,
    cartItems: [],
    currentItem: null,
  },
};
