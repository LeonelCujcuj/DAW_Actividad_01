import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            {
                name: 'Dia el trabajo',
                description: 'Celebra el dia del trabajo con tus compañeros de trabajo',
                dueDate: '2024-05-01'
            }
        ]
    },
    reducers: {
        addTask: (state, action) => {
            console.log(action.payload);
            state.tasks.push(action.payload);
            fetch('http://localhost:3001/tasks/addTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': '123456'
                },
                body: JSON.stringify(action.payload)
            }).catch(err => console.log(err));
        },
        initAddTask: (state, action) => {
            console.log(action.payload);
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            fetch('http://localhost:3001/tasks/removeTask/'+action.payload, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': '123456'
                },
            }).catch(err => console.log(err));
        }
    }
})

export const { addTask, initAddTask, removeTask } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks.value;
export default tasksSlice.reducer;
