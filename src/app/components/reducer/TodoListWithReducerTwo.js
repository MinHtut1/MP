'use client';
import { useReducer, useState, useEffect } from "react";
import{todoReducer}from './TodoListWithReducer';

function unique()
{
    let id = 3;
    return function ()
    {
        return id ++;
    }
}

const initialState =[
    {
        id : 1,
        title : 'To do 1'
    },
    {
        id : 2,
        title : 'To do 2'
    }
];
const newId = unique();

export default function TodoListWithReducerTwo() {
    return (<div>
        TodoListWithReducerTwo
    </div>)
}