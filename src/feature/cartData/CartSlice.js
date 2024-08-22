import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 // cartdata: { ProductId: "", image: "", price: 0, name: "", count: 0 },
 cartdata: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addCart: (state, action) => {
    //   state.cartdata += {
    //     ProductId: action.payload.ProductId,
    //     image: action.payload.image,
    //     price: action.payload.price,
    //     name: action.payload.name,
    //     count: action.payload.count,
    //   };
    // },
    addCart: (state, action) => {
        const existingProduct = state.cartdata.find(product => product.ProductId === action.payload.ProductId);
        if (existingProduct) {
          existingProduct.count += action.payload.count;
        } else {
          state.cartdata.push({
            ProductId: action.payload.ProductId,
            image: action.payload.image,
            price: action.payload.price,
            name: action.payload.name,
            count: action.payload.count,
          });
        }
      }
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
export const selectCart = (state) => state.cart.cartdata