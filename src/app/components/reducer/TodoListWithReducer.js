"use client";
import { useReducer, useState, useEffect} from "react";

function unique()
{
    let id = 3;
    return function ()
    {
        return id ++;
    }
}
const initialState  = [
    {
        id : 1,
        title : 'To do 1'
    },
    {
        id : 2,
        title : 'To do 2'
    }
];
const nextId = unique();
function todoReducer(state,action)
{
    switch (action.type)
    {
        case "ADD_TODO":
            return [...state, action.payload];
        case 'DELETE_TODO':
            return state.filter(todo=>todo.id != action.payload.id);
    }
    return state;
}

function TodoItem(props) {
    const {dispatch} = props;
    const {editHandler} = props;
    const deleteHandler = () => {
        let deleteAction = createAction('DELETE_TODO',props.todo);
        dispatch(deleteAction);
    }
    const editBtnHandler = () => {
        editHandler(props.todo);
    };
    return <div>
        {props.todo.title}
        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={editBtnHandler}
        >Edit
        </button>
        &nbsp;
        <button type={"button"}
                className={"btn btn-danger"}
                onClick={deleteHandler}> Delete
        </button>
    </div>;
}
function createAction(type,payload)
{
    return{
        type,
        payload
    }
}

function TodoInput({dispatch,editTodo}) {

    console.log('Todo input render',editTodo);
    const addHandler = () =>{   
        if (editTodo)
        {
            a
        }
        else
        {
            a
        }

        let newId = nextId();
        const newTodo = {
            id : newId,
            title : 'New todo'
        };
        let addTodoAction = createAction('ADD_TODO',newTodo);
        dispatch(addTodoAction);
    };
    const title = editTodo!==null?editTodo.title:'';
    console.log("Title", title);
    
    useEffect( ()=>{
        if(editTodo)
        {
            setTodoText(editTodo.title);
        }
    } ,[editTodo]);

    const [todoText,setTodoText] = useState(title);
    console.log('TodoText ',todoText);
    return <div>
        <form>
            <div className={"form-group"}>
                <input type={"text"}
                        value={todoText}
                        onChange={(event)=> setTodoText(event.target.value)}
                       className={"form-control-sm"}/>
                <button type={"button"}
                        className={"btn btn-primary"} 
                        onClick={addHandler}
                 >Add
                 </button>
            </div>

        </form>     {/*:<input type={"button"}
                        value={todoText}
                        onChange={(event)=> setTodoText(event.target.value)}
                        onClick={addHandler}
                        className={"form-control-sm"}/>*/}
    </div>;
}

export default function TodoListWithReducer()
{
    const [todos,dispatch] = useReducer(todoReducer,initialState);
    const [editTodo,setEditToDo] = useState(null);

    const editHandler = (todo) => {
        console.log('set edit to do',todo);
        setEditToDo(todo);
    }
    return (<div>
        <TodoInput dispatch={dispatch} editTodo={editTodo}/>
        <div>
            {
                todos.map(todo => <TodoItem key={todo.id}
                                         todo={todo}
                                         editHandler = {editHandler}    
                                         dispatch={dispatch}/>)
            }
        </div>
    </div>)
}