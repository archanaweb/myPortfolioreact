import React from 'react';
import {timeline} from '../MyData'

function TimeLine() {
  return (
   <>
   <ul className='timeline'>
   {timeline.map(item => 
   <li key={item.title}>
        <span>{item.year}</span>
        <h3>{item.projectName}</h3>
        <a href={item.url} target='blank'><i className="fa-solid fa-link"></i></a>
        <p>{item.title}</p>
        </li>
   )}
   </ul>
   
   </>
  )
}

export default TimeLine