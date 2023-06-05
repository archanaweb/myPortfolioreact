
import Header from './Components/Header';
import StickyMenu from './Components/StickyMenu';
import Banner from './Components/Banner';
import ProfileCard from './Components/ProfileCard';
import './assets/css/Style.css';
import './assets/css/Media.css';
import About from './Components/About';
import Resume from './Components/Resume';
import { useState } from 'react';
import Advantage from './Components/Advantage';
import Contact from './Components/Contact';
import Todo from './Components/Todo';
import Todo1 from './Components/Todo1';


function App() {
  // const [visible, setvisible] =useState(true);
  // const togglepost = () => {
  //   setvisible(!visible)
  // }

  return (
    <>
      <div className="wrapper">
        <div className="container">
            <StickyMenu/>
            <Header/>
            <ProfileCard/>
            <Banner/>
            <About/>
            <Resume/>
            <Advantage />
            <Contact  />
            
            
        </div>
      </div>
    </>
  );
}

export default App;
