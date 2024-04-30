import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "./reducers/goalsSlice";

export default configureStore({
    reducer: {
        goals: goalsReducer
    }
});