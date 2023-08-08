
import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name: 'todos',
    initialState: [
        {text: 'Learn React', completed: true},
        {text: 'Learn Redux', completed: false}
    ],
    reducers: {
        //add todo

    }
})


// Todo: need to export actions creators

export default todosSlice.reducer;