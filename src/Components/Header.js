import React from 'react'
import Nav from './Nav'

function Header() {

  const [shownav, setShownav] = React.useState(false);
  const showmenu = () => {
    setShownav(true);
  }
  const hidemenu =() => {
    setShownav(false);
  }
  

  return (
    <header className={shownav ? 'sidebar-opened' : ''}>

        <div className='menu-icon' onClick={showmenu}><i className="fa-solid fa-bars"></i></div>  
        <Nav name={true}/>
        <div className='backdrop' onClick={hidemenu}></div>

    </header>
  )
}

export default Header