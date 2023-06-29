import React from 'react'
import Skills from './Skills'
import AnimatedSection from './AnimatedSection';

function Advantage() {
  return (
    <section className='resume-section full-height center-section' id="advantageSec">
      <AnimatedSection>
    <span className='heading-title'><i className='fa-solid fa-file me-2'></i> My Skills</span>
    <h2 className='font48 fw500 color-white lh-sm text-capitalize'>My <span className='color-theme'> Advantage</span></h2>
    <Skills />
    </AnimatedSection>
</section>
  )
}

export default Advantage