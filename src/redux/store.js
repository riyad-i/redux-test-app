import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../features/counter/counterSlice.js'
import todosReducer from "../features/todos/todosSlice.js";



export default configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer
    }
})