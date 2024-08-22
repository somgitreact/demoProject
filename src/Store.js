import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/feature/cartData/CartSlice"

 const store = configureStore({
    reducer:{
        cart :  cartReducer
    },
})
export default store