import React, { useEffect, useState } from 'react';
import roundimg from '../assets/images/round-text.png';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Counter from './Counter';
import AnimateText from './AnimateText';
import AnimatedSection from './AnimatedSection';


function Banner() {

  const [title, setTitle] = useState('Hii🤚🏻 I am');
  const [name, setName] = useState('Archana Thakur');
  const [profile, setProfile] = useState('Frontend');
  const apiURI = process.env.REACT_APP_API_URI;

  async function fetchIntroData () {
    const response = await fetch(`${apiURI}/api/editintro`);
    const responseData = await response.json();
    const introData = responseData.data[0];
    setTitle(introData.title);
    setName(introData.name);
    setProfile(introData.profile);
  }

  useEffect(()=>{
    fetchIntroData();
  },[]);

  return (
    <section className='banner-section full-height' id="bannerSec">
      <AnimatedSection>
        <span className='heading-title'><i className='fa-solid fa-house me-2'></i> Introduce</span>
        <motion.h1
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: '0%' }}
        transition={{ duration: 1 }}
        className="font54 fw600 color-white">{title} <span className='color-theme'>{name}</span></motion.h1>
        {/* <h2 className="font48 fw400 color-white">Frontend Designer & <br/>Developer</h2> */}
        <h2 className="font48 fw400 color-white">
       
  <span>{profile} <br /></span>{' '} 
  <TypeAnimation
    sequence={[
      'Designer',
      1000,
      'Developer',
      1000,
      'React Developer',
      1000
    ]}
    repeat={Infinity}
  />

        </h2>
        <p className='sub-title font18 pt-5'>A passionate techy geek who creates beauitful and creative UI.<br />Gives life to the designs for interactions.</p>  
        <div className='counter-sec'>
          <div className='counter-item'>
          <Counter className='color-theme font40 fw500'  targetCount={2} duration={0.3}/>
            <p className='font18'>Year of Experience</p>
          </div>
          <div className='counter-item'>
          <Counter className='color-theme font40 fw500'  targetCount={15} duration={1}/>
            <p className='font18'>Projects Completed</p>
          </div>
        </div>
        <a href='#resumeSec' className='round-img'>  <img src={roundimg} /> </a>
        </AnimatedSection>
    </section>
  )
}

export default Banner;