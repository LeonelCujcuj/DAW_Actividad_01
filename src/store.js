import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "./reducers/goalsSlice";
import optionReducer from "./reducers/optionSlice";
import tasksReducer from "./reducers/tasksSlice";
//import logger from "./middleware/logger";
//import checker from "./middleware/checker";

export default configureStore({
    reducer: {
        goals: goalsReducer,
        tasks: tasksReducer,
        option: optionReducer
    },
   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,checker),
});