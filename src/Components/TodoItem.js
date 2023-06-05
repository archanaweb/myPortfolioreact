import React, { useState } from 'react'

function TodoItem({item , i, removeTodo}) {

    const [checked, setChecked] = useState(false)

    const inputCheckbox = ()=>{
        setChecked(!checked)
    };

  return (
    <li>
        <input type='checkBox' onChange={(e)=>inputCheckbox(e)}></input>
        {item}
        {checked && <button onClick={()=>removeTodo(i)}>-</button>}
    </li>
  )
}

export default TodoItem