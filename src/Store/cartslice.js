import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalItems: 0
}

const cart = createSlice(
    {
        name: 'addItem',
        initialState,
        reducers: {
            addItem(state,action){
                state.items.push(action.payload.item)
                state.totalItems+=1
            },
            deleteItem(state){
                state.items.pop();
                state.totalItems-=1
            },
            replaceCart(state,action){
                state.items = action.payload.cart;
            }
        }
    }
)

export const getCart = () => {
    return async (dispatch) => {
        console.log('Fetching cart data...');
        let response = await getCartData();
        dispatch(cartActions.addItem(response)); // Dispatch the addItem action

        console.log('Cart data fetched successfully:', response);
    }
}

const getCartData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({name: 'Apple',price: 120})
        }, 2000);
    })
}

const { actions: cartActions, reducer: cartReducers } = cart;

export {cartActions};

export default cartReducers;