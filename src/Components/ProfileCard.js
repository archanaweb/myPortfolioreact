import React from 'react';
import logo from '../assets/images/portfolio-logo.png';

import { mailId , address,sociallinks} from '../MyData';
import Lottie from "lottie-react";
import profileImg from "../assets/animations/profile-imgg.json";

function ProfileCard() {
  return (
    <div>
      
    <div className='profile-card'>
    <input type='checkBox' name='checBox' id="toggle" />
    <label for="toggle" className='switch'></label>
      <div className='profile-wrap'>
      <div className='prof-top'>
        <a className='logo' href='#banner'>  <img src={logo} alt=''/> </a>
        <span>
          Frontend Designer & Developer
        </span>
        </div>
        <div className='prof-image'>
          {/* <img src={profimage} alt="" /> */}
          <Lottie animationData={profileImg} loop={true} />
        </div>
        <h2>{mailId}</h2>
        <h3>{address}</h3>
        <p>© 2023 Archana. All Rights Reserved</p>
          <div className='social-icons'>
            {sociallinks.map((item) => <a key={item.icon} href={item.link}> <i className={item.icon}></i> </a>
            )} 
        </div>
        <a href='#contactSec' className='btn'>Hire me</a>

    </div>
    </div>
    </div>
  )
}

export default ProfileCard;