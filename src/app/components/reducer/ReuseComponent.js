"use client";

import {TodoInput} from "./TodoListWithReducerTwo";

export default function ReuseComponent() 
{
    const handler = (todo)=>{
        console.log('todo');
    }
    return (
        <div>
            {/*<h1>Reuse Component</h1>*/}
            <TodoInput addTodo={handler}/>  
        </div>
    );
}