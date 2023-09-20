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
      state.products = action.payload;
    },
  },
});

export const { addToBasket } = slice.actions;
export default slice.reducer;
