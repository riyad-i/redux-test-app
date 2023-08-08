
import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name: 'todos',
    initialState: [
        {id: '1', text: 'Learn React', completed: true},
        {id: '2', text: 'Learn Redux', completed: false}
    ],
    reducers: {
        addTodo: (state, action) => {
            const {payload} = action
            state.push({id : payload,
                text:payload,
                completed: false})
        }

    }
})


// Todo: need to export actions creators
export const { addTodo } = todosSlice.actions
export default todosSlice.reducer;