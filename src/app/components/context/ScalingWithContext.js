"use client";


import { todoReducer } from "../reducer/TodoListWithReducer";
import ToDoListWithReducerTwo from "../reducer/TodoListWithReducerTwo";
import { TodoContext, todoContext,TodoDispatchContext } from "./TodoContext";
import { useReducer } from "react";
import ReuseComponent from "../reducer/ReuseComponent";
import TodoCount from "../reducer/TodoCount";

const initialState = [
    {
        id: 1,
        title: "Todo scaling 1",
    },
    {
        id: 2,
        title: "Todo scaling 2",
    },
    
]


export default function ScalingWithContext() 
{
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    return (
        <div>
            Scaling with Context
            <TodoContext.Provider value={todos}>
                <TodoDispatchContext.Provider value={dispatch}>
                    <ToDoListWithReducerTwo />
                    {/*<ReuseComponent addTodo= {()=>{}}/>*/}
                    <TodoCount/>
                </TodoDispatchContext.Provider>
            </TodoContext.Provider>
        </div>
    )
}