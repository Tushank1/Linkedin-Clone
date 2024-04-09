import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { login, logOut } = userSlice.actions;

// The function below is called a selector. It selects the value of the `value` key from the `rootReducer` state.
export const selectUser = (state) => state.user.user;

export default userSlice;
