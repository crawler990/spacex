import './Nav.css';
import logo from './assets/shared/logo.svg';
import hamburger from './assets/shared/icon-hamburger.svg';

function Nav({changeCurrentView, showMobileMenu}) {
  return (
    <nav>
        <img className='logo' src={logo} alt=''></img>
        <span className='line'></span>
        <ul>
            <li onClick={() => changeCurrentView('Home')}>00 HOME</li>
            <li onClick={() => changeCurrentView('Destination')}>01 DESTINATION</li>
            <li onClick={() => changeCurrentView('Crew')}>02 CREW</li>
            <li onClick={() => changeCurrentView('Technology')}>03 TECHNOLOGY</li>
        </ul>
        <div id="mobile-menu">
          <img src={hamburger} alt="" onClick={() => showMobileMenu(true)} />
        </div>
    </nav>
  )
}

export default Nav;
