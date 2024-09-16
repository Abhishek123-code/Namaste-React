import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
        //mutating the state here
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop(action.payload);
    },
    //orignal State= {items:["pizza"]}
    clearItems: (state, action) => {
      //either mutate the existing state or return a new state  
      state.items.length = 0;
      //return {items[]}
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
