import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feedState: feedReducer
  },
});

export default appStore;