import { useSelector, useDispatch } from "react-redux"
import { addTodo } from "../features/todos/todosSlice"
import { useState } from "react";


export default function ToDoList() {
    const todos = useSelector((state) => state.todos) //getting state from redux store

    const dispatch = useDispatch()

    const [input, setInput] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


    return(
        <>
            <h1>ToDoList</h1>
            <ul>{todos.map(todo => <li key={todo.text}>{todo.text}</li>)}</ul>

            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text"/>
                <button onClick={handleClick}>Add Todo</button>
            </form>
        </>
    )
}