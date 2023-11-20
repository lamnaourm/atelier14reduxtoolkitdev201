import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";


const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [
            {
                id: uuid(),
                task: "Reviser Javascript",
                completed: false
            },
            {
                id: uuid(),
                task: "Reviser Javas",
                completed: true
            },
            {
                id: uuid(),
                task: "Reviser Python",
                completed: false
            }
        ]
    },
    reducers: {
        addtache : (state, action) => {
            state.tasks = [...state.tasks, {id:uuid(), task: action.payload, completed:false}]
        }
    }
})

export const {addtache} = TodoSlice.actions
export default TodoSlice.reducer