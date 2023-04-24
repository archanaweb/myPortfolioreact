import React from 'react';
import roundimg from '../assets/images/round-text.png';
import { TypeAnimation } from 'react-type-animation';

function Banner() {
  return (
    <section className='banner-section full-height' id="bannerSec">
        <span className='heading-title'><i className='fa-solid fa-house me-2'></i> Introduce</span>
        <h1 className="font54 fw600 color-white">Hii🤚🏻 I am <span className='color-theme'>Archana Thakur</span></h1>
        {/* <h2 className="font48 fw400 color-white">Frontend Designer & <br/>Developer</h2> */}
        <h2 className="font48 fw400 color-white">
       
  <span>Frontend </span>{' '} 
  <TypeAnimation
    sequence={[
      'Designer',
      1000,
      'Developer',
      1000,
      'Engineer',
      1000
    ]}
    repeat={Infinity}
  />

        </h2>
        <p className='sub-title font18 pt-5'>A passionate techy geek who creates beauitful and creative UI.<br />Gives life to the designs for interactions.</p>
        <div className='counter-sec'>
          <div className='counter-item'>
            <h3 className='color-theme font40 fw500'>2+</h3>
            <p className='font18'>Year of Experience</p>
          </div>
          <div className='counter-item'>
            <h3 className='color-theme font40 fw500'>15+</h3>
            <p className='font18'>Projects Completed</p>
          </div>
        </div>
        <a href='#projects' className='round-img'>  <img src={roundimg} /> </a>
    </section>
  )
}

export default Banner;