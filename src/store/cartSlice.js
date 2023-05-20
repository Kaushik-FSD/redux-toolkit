import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

// slice is the combination of action creators and reducer
const cartSlice = createSlice({
  name: "cart", //name of the state
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

//actions
export const { add, remove } = cartSlice.actions;

//reducers
export default cartSlice.reducer;
