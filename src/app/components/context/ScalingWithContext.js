import { todoReducer } from "../reducer/TodoListWithReducer";
import { TodoContext, todoContext,TodoDispatchContext } from "./TodoContext";
import { useReducer } from "react";

const initialState = [
    {
        id: 1,
        title: "Todo 1",
    },
    {
        id: 2,
        title: "Todo 2",
    },
    {
        id: 3,
        title: "Todo 3",
    },
]


export default function ScalingWithContext() 
{
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    return (
        <div>
            Scaling with Context
            <TodoContext.Provider value={tasks}>
                <TodoDispatchContext.Provider value={todoReducer}>
                    <TodoList />
                </TodoDispatchContext.Provider>
            </TodoContext.Provider>
        </div>
    )
}