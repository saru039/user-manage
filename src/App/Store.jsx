import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../Slices/userSlice";

const store = configureStore({
    reducer: {
        usersInfo: useReducer
    }
});

export default store;