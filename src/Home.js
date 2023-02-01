import './Home.css';
import Nav from './Nav';

function Home({changeCurrentView, showMobileMenu}) {
  return (
    <div className = 'home'>
      <Nav changeCurrentView = {changeCurrentView} showMobileMenu = {showMobileMenu}/>
      <div className="home-content">
        <div className="home-left-content">
          <p className='home-lead'>SO, YOU WANT TO TRAVEL TO </p>
          <p className='home-space'>SPACE</p>
          <p className='home-quote'>Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className="home-right-content">
          <div className="home-explore">
              <p>EXPLORE</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
