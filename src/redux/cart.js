const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    cartItem: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            state.cartItem.push(action.payload);
        },
        removeFromCart(state, action){
            state.cartItem = state.cartItem.filter(item => item.id !== action.payload);
            return state;
        }
    },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;