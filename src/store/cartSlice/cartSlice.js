import { createSlice } from "@reduxjs/toolkit";
import totalSessionCart from "../../utils/totalSessionCart";

const sessionCart = JSON.parse(sessionStorage.getItem("cart"));

const initialState = {
  cart: sessionCart ? sessionCart : [],
  total: totalSessionCart(sessionCart),
};
//add middleware
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
      //if all is true, it will remove the product from the cart
      if (payload.all) {
        state.cart.splice(
          state.cart.findIndex((x) => x.id === target.id),
          1
        );
        state.total -= target.amount;
        //if all is not true, we will get an amount correction, where we will update the amount of an item, and update the total...
      } else {
        let oldAmount = target.amount;
        //change to amount fixer..
        if (payload.amount > 0) {
          console.log(payload);
          target.amount = payload.amount;
          if (oldAmount > payload.amount) {
            state.total -= oldAmount - payload.amount;
          } else if (oldAmount < payload.amount) {
            state.total += payload.amount - oldAmount;
          }
        } else {
          state.cart.splice(
            state.cart.findIndex((x) => x.id === target.id),
            1
          );
          state.total -= target.amount;
        }
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
