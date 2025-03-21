'use client'
import {useState} from "react";

export default function Counter()
{
    console.log("Render");
    const [count,setCount] = useState(0);
    const [label,setlabel] = useState('HelloWorld');
    const inc = ()=>{
        console.log('Inc');
        setCount(count+1);
        setCount(count+1);
        setCount(count+5);
    }

    const dec = ()=>{
        console.log('Dec');
        setCount(count-1);
    }
    const changeLabel = ()=>{
        console.log("Change Label");
        setlabel (new String("HelloWorld1"));
        //setCount(count+1);
    };
    return (<div>
        <button type={"button"} onClick={inc}>+</button>
        {count}
        <button type={"button"} onClick={dec}>-</button>
        {label}
        <button type={"button"} onClick={changeLabel}>changeLabel</button>
    </div>);
}