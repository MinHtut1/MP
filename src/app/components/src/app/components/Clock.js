'use client';
import {useState,useEffect} from "react";

export default function Clock()
{
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date());
        }, 1000);
    });
    return (<div>
        Clock Countainer
        <span>
        {time.toLocaleTimeString()}
        </span>
    </div>);
}