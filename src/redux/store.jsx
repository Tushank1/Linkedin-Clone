import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "../redux/UserSlice";

export default configureStore({
  reducer: {
    user: useReducer,
  },
});
