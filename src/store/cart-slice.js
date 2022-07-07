import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
  addToCart(state,action){
      const newItem = action.payload;
      const existingItem = state.itemList.find(item=> item.id === newItem.id);
      if(existingItem) {
          existingItem.quantity++;
          existingItem.totalPrice += newItem.price;
      } else {
          state.itemList.push({
              id:newItem.id,
              price:newItem.price,
              quantity:1,
              name:newItem.name,
              totalPrice:newItem.price,
          })
      }
  },
  removeFromCart(state,action){
    const id = action.payload;
    const existingItem = state.itemList.find(item=> item.id === id);
    //console.log(state.itemList);
    if(existingItem.quantity ===1) {
        state.itemList = state.itemList.filter(item=> item.id !== id)
        state.totalQuantity--;
    } else {
       existingItem.quantity--;
       existingItem.totalPrice -= existingItem.price;
    }
  },
  setShowCart(state){
      state.setShowCart(true);

  }
  },
});


export const cartActions = cartSlice.actions;

export default cartSlice;
