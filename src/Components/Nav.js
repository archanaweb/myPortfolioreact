import React from 'react'

function Nav({name}) {
  return (
    <nav>
            <ul>
                <li><a href="#bannerSec"><i className="fa-solid fa-house"></i>{name && 'Home'}</a></li>
                <li><a href="#aboutSec"><i className="fa-solid fa-user"></i>{name && "About"}</a></li>
                <li><a href="#resumeSec"><i className="fa-solid fa-file"></i>{name && 'Resume'}</a></li>
                <li><a href="#advantageSec"><i className="fa-solid fa-lightbulb"></i>{name && 'Skills'}</a></li>
                {/* <li><a href="/about"><i className="fa-solid fa-display"></i>{name && 'Portfolio'}</a></li>
                <li><a href="/contact"><i className="fa-solid fa-server"></i>{name && 'Services'}</a></li> */}
                <li><a href="#contactSec"><i className="fa-solid fa-envelope"></i>{name && 'Contact'}</a></li>

            </ul>
        </nav>
  )
}

export default Nav