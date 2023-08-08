
import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name: 'todos',
    initialState: [
        {id: '1', text: 'Learn React', completed: true},
        {id: '2', text: 'Learn Redux', completed: false}
    ],
    reducers: {
        addTodo: (state) => {

        }

    }
})


// Todo: need to export actions creators
export const { addTodo } = todosSlice.actions
export default todosSlice.reducer;