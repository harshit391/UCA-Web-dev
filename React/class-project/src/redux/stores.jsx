import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        userDetails: {},
    },
    
})

export default store;

// Reducer => Its a function which accepts intialized state and action and returns new state