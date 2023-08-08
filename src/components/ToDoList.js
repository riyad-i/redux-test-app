import { useSelector, useDispatch } from "react-redux"
import { addTodo } from "../features/todos/todosSlice"
import { useState } from "react";


export default function ToDoList() {
    const todos = useSelector((state) => state.todos) //getting state from redux store
    console.log(todos);

    const dispatch = useDispatch()

    const [input, setInput] = useState('')

    return(
        <>
            <h1>ToDoList</h1>
            <ul>{todos.map(todo => <li key={todo.text}>{todo.text}</li>)}</ul>

            <form>
                <input onChange={(e) => setInput(e.target.value)} type="text"/>
                <button onClick={(e) => {
                    e.preventDefault()
                    dispatch(addTodo(input))}}>Add Todo</button>
            </form>
        </>
    )
}