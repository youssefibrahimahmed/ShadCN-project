import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload
            const existItem = state.items.find(
                (item) => item.id === newItem.id
            );

            if (existItem)
                existItem.quantity += 1
            else {
                state.items.push({
                    ...newItem,
                    quantity: 1
                })
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
        clearCart: (state) => {
            state.items = [];
        },

        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload
            const item = state.items.find(
                (item) => item.id == id
            )
            if (item && quantity > 0) {
                item.quantity = quantity
            }
        }
    }
});


export const {
    addToCart,
    removeFromCart,
    clearCart,
    updateQuantity
} = cartSlice.actions;

export default cartSlice.reducer