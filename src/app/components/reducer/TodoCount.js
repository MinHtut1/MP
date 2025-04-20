import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoCount() 
{
    const todos = useContext(TodoContext);
    //console.log('todos', todos);
    return (<div>
        List count {todos.length}
    </div>);
}