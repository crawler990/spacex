import { useState } from 'react';
import './App.css';
import Crew from './Crew.js';
import Destination from './Destination.js';
import Home from './Home.js';
import MobileMenu from './Mobile-Menu.js';
import Technology from './Technology.js';

function App() {
  const [currentView, setView] = useState('Home');
  const [menuState, showMobileMenu] = useState(false);

  const handleClick = (e) => {
    const target = document.getElementById('menu');
    const openTarget = document.getElementById('mobile-menu');
    const closeTarget = document.getElementById('close');
    const menuList = document.getElementById('menu-list');
  
      if(
        (!e.composedPath().includes(target) && !e.composedPath().includes(openTarget))||
         e.composedPath().includes(closeTarget) ||
         e.composedPath().includes(menuList) 
         ){
        showMobileMenu(false);
      }
      else{
        showMobileMenu(true);
      }

      document.removeEventListener('click',handleClick);
  }

  menuState && document.addEventListener('click', handleClick);

  return(
    <div className='container'>
      {currentView === 'Home' && <Home changeCurrentView = {(view) => setView(view)} showMobileMenu = {(menuState) => showMobileMenu(menuState)}/>}
      {currentView === 'Destination' && <Destination changeCurrentView = {(view) => setView(view)} showMobileMenu = {(menuState) => showMobileMenu(menuState)}/>}
      {currentView === 'Crew' && <Crew changeCurrentView = {(view) => setView(view)} showMobileMenu = {(menuState) => showMobileMenu(menuState)}/>}
      {currentView === 'Technology' && <Technology changeCurrentView = {(view) => setView(view)} showMobileMenu = {(menuState) => showMobileMenu(menuState)}/>}
      {menuState === true && <MobileMenu closeMenu={() => showMobileMenu(false)} changeCurrentView = {(view) => setView(view)}/>}
    </div>
  )
}

export default App;
