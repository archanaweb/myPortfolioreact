import React from 'react'
import { skills } from '../MyData';
import AnimatedSection from './AnimatedSection';


const Skills = () => {
  return (
    <>
 <AnimatedSection>
  <ul className='skills'>
    {skills.map( (item, index) =>
     <li key={index} className='skill'>
        <img src={item.icon} alt={item.name} />
        <h3>{item.percentage}%</h3>
        <p> {item.name}</p>
    </li>
    )}
  </ul>
  </AnimatedSection>

    </>
  )
}

export default Skills