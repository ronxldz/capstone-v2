import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: [],
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
  },
});

export const { addToBasket } = slice.actions;
export default slice.reducer;
