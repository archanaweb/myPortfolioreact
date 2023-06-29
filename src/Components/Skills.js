import React from 'react'
import { skills } from '../MyData';



const Skills = () => {
  return (
    <>
 
  <ul className='skills'>
    {skills.map( (item, index) =>
     <li key={index} className='skill'>
        <img src={item.icon} alt={item.name} />
        <h3>{item.percentage}%</h3>
        <p> {item.name}</p>
    </li>
    )}
  </ul>

    </>
  )
}

export default Skills