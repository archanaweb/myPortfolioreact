import React from 'react'

function Contact() {
  return (
    <div>
         <section className='about-section full-height center-section' id="contactSec">
    <span className='heading-title'><i className='fa-solid fa-envelope me-2'></i> Contact</span>
    <h2 className='font48 fw500 color-white lh-sm text-capitalize'>Let's Work <span className='color-theme'>Together</span></h2>

    <div className='contactForm'>
        <form action='#' method='POST'>
            <div className='formInput'>
                <input type='text' name='name' placeholder='Your Name' autoComplete='off' required/>
                <input type='email' name='Email' placeholder='Your Email' autoComplete='off' required/>
            </div>
            <div className='formInput'>
                <input type='text' name='Phone' placeholder='Phone' autoComplete='off' required/>
                <input type='text' name='Subject' placeholder='Subject' autoComplete='off' required/>
            </div>
            <textarea name='message' rows="4" autoComplete='off' placeholder='Your message' required></textarea>
            <input type='submit' value="Send" />
        </form>
    </div>
    
   </section>
    </div>
  )
}

export default Contact