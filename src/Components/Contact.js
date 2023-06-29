import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function Contact() {
  const [formData, setFormData] = useState({
    name : '',
    Email : '',
    Phone : ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validate = (type) => {
    if(type == 'name'){
      if(formData ?.name == "") {
        return 'Name field required';
      }else if(formData ?.name?.length < 3){
        return 'Name field should be greater than 3';
      }
      return '';
    }

    if(type == 'Email'){
      if(formData ?.Email == "") {
        return 'Email field required';
      }else if(!formData ?.Email?.match(validRegex)){
        return 'Enter valid email';
      }
      return '';
    }
    if(type == 'Phone'){
      if(formData ?.Phone == "") {
        return 'Phone field required';
      }else if(formData ?.Phone?.length != 10){
        return '10 digit number required';
      }
      return '';
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var isFormValidated = !(validate('name') || validate('Email') || validate('Phone'));

    if(isFormValidated){
      document.getElementById('myForm').submit();
    }
    setFormSubmitted(true);

  }

  const handleChange = (e)=>{
    formData[e.target.name] = e.target.value;
    setFormData({...formData});
  }

  
  return (
    <div>
        
         <section className='about-section full-height center-section' id="contactSec">
         <AnimatedSection>
    <span className='heading-title'><i className='fa-solid fa-envelope me-2'></i> Contact</span>
    <h2 className='font48 fw500 color-white lh-sm text-capitalize'>Let's Work <span className='color-theme'>Together</span></h2>
    {console.log(formData)}
    <div className='contactForm'>
        <form action='https://formspree.io/f/xoqzrdgw' id="myForm" method='POST' onSubmit={handleSubmit}>
            <div className='formInput'>
                <input type='text' name='name' placeholder='Your Name' autoComplete='off' onChange={handleChange}/>
                
                {formSubmitted &&
                <>
                  {
                    validate('name') && <span>{validate('name')}</span>

                  }
                </>
                }

                <input type='email' name='Email' placeholder='Your Email' autoComplete='off' onChange={handleChange}/>


                {formSubmitted &&
                <>
                {
                 validate('Email') && <span>{validate('Email')}</span>
                
                }
                </>

                }
                
                
            </div>
            <div className='formInput'>
                <input type='text'  name='Phone' placeholder='Phone' autoComplete='off' onChange={handleChange}/>

                {formSubmitted &&
                  <>
                  {
                  validate('Phone') && <span>{validate('Phone')}</span>
                }
                  </>
                }

                

                <input type='text' name='Subject' placeholder='Subject' autoComplete='off' onChange={handleChange}/>

            </div>
            <textarea name='message' rows="4" autoComplete='off' placeholder='Your message' onChange={handleChange}></textarea>
            <input type='submit' value="Send" />
        </form>
    </div>
    </AnimatedSection>
   </section>
   
    </div>
  )
}

export default Contact