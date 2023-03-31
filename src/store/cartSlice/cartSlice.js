import { createSlice } from "@reduxjs/toolkit";
import totalSessionCart from "../../utils/totalSessionCart";

const sessionCart = JSON.parse(sessionStorage.getItem("cart"));

const initialState = {
  cart: sessionCart ? sessionCart : [],
  total: totalSessionCart(sessionCart),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { payload } = action;
      let target = state.cart.find((product) => product.id === payload.id);
      if (target) {
        target.amount += 1;
      } else {
        state.cart = [...state.cart, { ...payload, amount: 1 }];
      }
      state.total += 1;
    },
    removeProduct: (state, action) => {
      const { payload } = action;
      console.log(payload);
      let target = state.cart.find((product) => product.id === payload.id);
      if (payload.all) {
        state.cart.splice(
          state.cart.findIndex((x) => x.id === target.id),
          1
        );
        state.total -= target.amount;
      } else {
        if (target.amount > 1) {
          state.cart.target.amount -= 1;
        } else {
          state.cart.splice(
            state.cart.findIndex((x) => x.id === target.id),
            1
          );
        }
        state.total -= 1;
      }
    },
    removeAllProducts: (state) => {
      state.cart = [];
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, removeAllProducts } =
  cartSlice.actions;

export default cartSlice.reducer;
