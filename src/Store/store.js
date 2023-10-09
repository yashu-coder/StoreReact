import { configureStore } from "@reduxjs/toolkit";
import  cartReducers  from "./cartslice";

export const store = configureStore(
    {
        reducer: {cart : cartReducers}
    }
)