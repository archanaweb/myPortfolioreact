import React, { useState } from 'react'

function Todo() {

    const [inputValue, setInputValue] = useState("");

    const [todoList, setTodoList] = useState([]);

   const addlist = () => {
        todoList.push(inputValue);
        setTodoList([...todoList]);
   }

   const deleteTodo = (i) => {
        todoList.splice(i, 1);
        setTodoList([...todoList]);
   }


  return (
    <div>
        <div className='flex'>
            <input placeholder='type here' value={inputValue}  onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={addlist}>Add</button>
        </div>

        <p>{inputValue}</p>
        

        <ul className='list'>

            {todoList.map( (item, i) =>   <li key={i}>

                <span>{item}</span>
                <button onClick={()=> deleteTodo(i)}>Delete</button>
            </li>)}
          
        </ul>
    </div>
  )
}

export default Todo