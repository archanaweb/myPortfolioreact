import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';


// to get the data from LS

const getLocalItems = () => {
  let todoLists  = localStorage.getItem("lists");
  if(todoLists){
      return JSON.parse(localStorage.getItem("lists"));
  }else{
    return [];
  }
}

function Todo1() {
    const[todo, setTodo] = useState("");

    const [todoList, setTodoList] = useState(getLocalItems());

    
    const addTodo = ()=> {
        console.log(todo);
        setTodoList([...todoList, todo]);
    }
    const removeTodo =(ind)=> {
        // console.log(ind)
        const findTodo = todoList.filter((item, i)=> ind !== i); 
        console.log(findTodo);
        // todoList.splice(ind, 1);
        setTodoList(findTodo);
    }
    const deleteAll =()=> {
        setTodoList([]);
    };

  // add data to localstorage

  useEffect(()=>{
    localStorage.setItem("lists", JSON.stringify(todoList))
  }, [todoList]);

  return (
    <div className='todo'>
         <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
         <button onClick={addTodo}>+</button>
         <p>{todo}</p>
        
         <ul className='todo-list'>
            {todoList.map((item, i)=> <TodoItem item={item} key={i} i={i} removeTodo={removeTodo}/>)}
         </ul>
         <button onClick={deleteAll}>Clear</button>


    

    </div>
  )
}

export default Todo1