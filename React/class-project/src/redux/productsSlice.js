import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsList: [],
};

const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        setProductsList: (state, action) => {
            state.productsList = action.payload;
        },
    },
});

export const { setProductsList } = productSlice.actions;

export default productSlice.reducer;
