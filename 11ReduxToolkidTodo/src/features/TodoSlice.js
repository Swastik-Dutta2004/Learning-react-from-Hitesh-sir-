import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1 , Text: "Hello world" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo : (state,action) => {
            const todo = {
                id: nanoid(),
                Text: action.payload
            }
        },
        removeTodo : () => {}
    }
})