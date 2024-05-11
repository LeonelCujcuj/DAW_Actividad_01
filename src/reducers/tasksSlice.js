import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            {
                name: 'Dia el trabajo',
                description: 'Celebra el dia del trabajo con tus compañeros de trabajo',
                DueDate: '2024-05-01'
            },
            {
                name: 'Dia de la madre',
                description: 'Compra un regalo para mama y celebra con ella su dia',
                DueDate: '2024-05-10'
            }
        ]
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        }
    }
})

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
