import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

// slice is the combination of action creators and reducer
const productSlice = createSlice({
  name: "product", //name of the state
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      /*
        Do not do like this. NEVER call async calls in reducers as these functions are pure functions(sync)
        const res = await fetch("https://fakestoreapi.com/products");
        */
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

//actions
export const { setProducts, setStatus } = productSlice.actions;

//reducers
export default productSlice.reducer;

//In plain redux THunk is added in the store itself.
//But in redux-toolkit thunk is already configured, we just have to use it.
//thunk
export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
