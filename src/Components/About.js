import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

function About() {
  return (
   <section className='about-section full-height center-section' id="aboutSec">
      <AnimatedSection>
    <motion.span initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='heading-title'><i className='fa-solid fa-user me-2'></i> About</motion.span>
    <motion.h2 initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }} className='font48 fw500 color-white lh-sm text-capitalize'>create beautiful web applications with delightful <span className='color-theme'>user experience</span></motion.h2>
    <motion.p initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }} className='font18 pt-4 lh-base'>As a Frontend Engineering, It is my passion to create and develop beautiful web application with delightful user experience. I have great knowledge of modern Frontend technologies.</motion.p>
          </AnimatedSection>
   </section>
  )
}

export default About;