import React from 'react';
import TimeLine from './TimeLine';
import AnimatedSection from './AnimatedSection';

function Resume() {
  return (
    <section className='resume-section full-height center-section' id="resumeSec">
      <AnimatedSection>
        <span className='heading-title'><i className='fa-solid fa-file me-2'></i> Resume</span>
        <h2 className='font48 fw500 color-white lh-sm text-capitalize'>Education &<span className='color-theme'> Experience</span></h2>
        </AnimatedSection>
        <TimeLine />
    </section>
  )
}

export default Resume;