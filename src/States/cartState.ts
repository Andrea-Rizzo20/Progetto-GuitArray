import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

interface cartType {
    items: any[],
    totPrice: number,
    totQuantity: number
}

const initialCart: cartType = {
    items:[],
    totPrice: 0,
    totQuantity: 0,
}

export const cartState = createSlice({
    name:'cart',
    initialState: initialCart,
    reducers: {
        addToCart: (state, action) =>{
            let currentItem = action.payload
            if (state.items.some(item => item.id === currentItem.id)) {
                currentItem.quantity++;
                currentItem.totPrice += currentItem.price;
            } else {
                currentItem = {...currentItem, quantity: 1, totPrice: currentItem.price}
                state.items.push(currentItem)
            }
            state.totPrice += currentItem.price
            state.totQuantity++
        },
        removeFromCart: (state, action) => {
            let id = action.payload
            let existingItem = state.items.find(item => item.id === id)
            if (existingItem.quantity > 1) {
                existingItem.quantity--;
                existingItem.totPrice -= existingItem.price;
            } else {
                state.items = state.items.filter(item => item.id !== id)
                state.totPrice -= existingItem.totPrice
            }
            state.totQuantity --
        }
    }
})