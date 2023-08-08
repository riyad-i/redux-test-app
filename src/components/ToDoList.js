import { useSelector, useDispatch } from "react-redux"
import { addTodo } from "../features/todos/todosSlice"

export default function ToDoList() {
    const todos = useSelector((state) => state.todos) //getting state from redux store
    console.log(todos);

    const dispatch = useDispatch()



    return(
        <>
        <h1>ToDoList</h1>
        <ul>{todos.map(todo => <li key={todo.text}>{todo.text}</li>)}</ul>
        <input type="text"/>
        <button>Add Todo</button>
        </>
    )
}