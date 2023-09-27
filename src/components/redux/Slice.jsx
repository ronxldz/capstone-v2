import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: null,
  selectedProducts: [],
};

export const slice = createSlice({
  name: "mercatura",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else state.products.push(action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    userSignOut: (state) => {
      state.userInfo = null;
    },
    addProductToSelectedProducts: (state, action) => {
      const { id, title, description, price, category, image, quantity } =
        action.payload;
      const newItem = {
        id,
        title,
        description,
        price,
        category,
        image,
        quantity,
      };
      state.selectedProducts.push(newItem);
    },
  },
});

export const {
  addToBasket,
  deleteItem,
  resetCart,
  decrementQuantity,
  incrementQuantity,
  setUserInfo,
  userSignOut,
  addProductToSelectedProducts,
} = slice.actions;
export default slice.reducer;
