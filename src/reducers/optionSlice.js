import { createSlice } from "@reduxjs/toolkit";
import { Value } from "sass";

export const optionSlice = createSlice({
    name: "option",
    initialState: {
        value: 'tasks',
    },
    reducers: {
        changeOption: (state, action) => {
        state.value = action.payload;
        },
    },
    });

export const { changeOption } = optionSlice.actions;
export const selectOption = (state) => state.option.value;
export default optionSlice.reducer;