import { createSlice } from "@reduxjs/toolkit";

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
        goals: [
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
        addGoal: (state, action) => {
            state.goals.push(action.payload);
        }
    }
})

export const { addGoal } = goalsSlice.actions;
export default goalsSlice.reducer;
