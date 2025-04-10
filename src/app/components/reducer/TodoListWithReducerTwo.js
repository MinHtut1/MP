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

function TodoItem(props){
    const {todo,update} = props;
    const [editMode, setEditMode] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);

    //console.log('Todo' ,todo);
    const editBtnHandler = () => {
        if(editMode) //Button is now Save 
        {
            let updateTodo = {
                ...todo,
                title : editTitle
            };
            update(updateTodo);
            setEditMode(false);
        }
        else
        {
            setEditMode(true);
        }
        setEditMode(true);
    }
    return <div>
        {
            !editMode && props.todo.title
        }
        {
            editMode && <input type={"text"}value={editTitle}
                                            onChange={(event)=> setEditTitle(event.target.value)}/>
        }
        <button type={"button"}
            className={"btn btn-primary"}
            onClick={editBtnHandler}
        >
            { editMode ? 'Save' : 'Edit'}
            </button>
            &nbsp;
            <button type={"button"}
                    className={"btn btn-danger"}>
                Delete
                </button>        
    </div>;
}

function createAction(type, payload) 
{
    return {
        type,
        payload
    };
}

export default function TodoListWithReducerTwo() {
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const updateTodo = (todo) => {
        let updateAction = createAction('Update_Todo', todo);
        dispatch(updateAction);

    }

    return (<div>
        {
            todos.map((todo)=> <TodoItem key={todo.id} 
                                         todo={todo}
                                         update={updateTodo}/>
            )
        }
    </div>);
}                   