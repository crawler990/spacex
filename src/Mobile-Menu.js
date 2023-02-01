import React from 'react';
import './Mobile-Menu.css';
import close from './assets/shared/icon-close.svg';

function MobileMenu({changeCurrentView,closeMenu}) {

  return (
    <div id='menu'>
        <img id='close' src={close} alt="" onClick={closeMenu}/>
        <ul id='menu-list'>
            <li onClick={() => changeCurrentView('Home')}>00 HOME</li>
            <li onClick={() => changeCurrentView('Destination')}>01 DESTINATION</li>
            <li onClick={() => changeCurrentView('Crew')}>02 CREW</li>
            <li onClick={() => changeCurrentView('Technology')}>03 TECHNOLOGY</li>
        </ul>
    </div>
  )
}

export default MobileMenu;