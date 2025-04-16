'use client';
import { useReducer ,useState, useEffect } from "react";
import {todoReducer} from "./TodoListWithReducer";
import next from "next";

function unique()
{
    let id = 3;
    return function ()
    {
        return id ++;
    }
}
const initialState = [
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

function TodoItem(props) {
    const {todo,update,deleteTodo} =props;

    const [editMode, setEditMode] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);
    
    const editBtnHandler = () =>{
        if(editMode)
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

    }
    const deleteBtnHandler = () =>{
        deleteTodo(todo);
    }

    return (<div>
        {
            !editMode && props.todo.title
        }
        {
            editMode && <input type={"text"} value={editTitle}
                                             onChange={(event)=> setEditTitle(event.target.value)}/>
        }
        <button type={"button"}
                 className={"btn btn-primary"}
                 onClick={editBtnHandler}
        >
            { editMode? 'Save' : 'Edit'}
        </button>
        &nbsp;
        <button type={"button"}            
                 className={"btn btn-danger"}
                 onClick={deleteBtnHandler}>
            Delete
        </button>
    </div>);
}
function createAction(type, payload)
{
    return {
        type,
        payload
    }
}

export function TodoInput(props) {
    const {addTodo} = props;
    const[todoText,setTodoText] = useState('');
    const addBtnHandler = () =>{
        let nextId = newId();
        console.log('nextId',nextId);
        const newTodo = {
            id : nextId,
            title : todoText
        };
        addTodo(newTodo);
        setTodoText('');
    };
        {/*let addAction = createAction('ADD_TODO',todo);
        props.dispatch(addAction);
        setTodoText('');*/}
      
        return <div>
            <form>
                <div className={"form-group"}>
                    <input type={"text"}
                           value={todoText}                      
                           onChange={(event)=>setTodoText(event.target.value)}
                        className={"form-control-sm"} />
                    <button type={"button"}
                        className={"btn btn-primary"}
                        onClick={addBtnHandler}
                        
                    >Add
                    </button>
                </div>
            </form>
        </div>;
    }

export default function ToDoListWithReducerTwo()
{
    const [todos,dispatch] = useReducer(todoReducer,initialState);

    const updateTodo = (todo) =>{
        let updateAction = createAction('UPDATE_TODO',todo);
        dispatch(updateAction);
    }

    const deleteTodo = (todo) =>{
        let deleteAction = createAction('DELETE_TODO',todo);
        dispatch(deleteAction);
    }

    const addTodo = (todo) =>{
        let addTodoAction = createAction('ADD_TODO',todo);
        dispatch(addTodoAction);
    }

    return (<div>
        <TodoInput addTodo={addTodo}/>
        {
            todos.map((todo) => <TodoItem key={todo.id} 
                                        todo={todo}
                                        update={updateTodo}
                                        deleteTodo = {deleteTodo} />
            )   
        }
    </div>);
}