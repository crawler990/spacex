import React from 'react';
import './Crew.css';
import Nav from './Nav';
import { useState } from 'react';
import data from './assets/data.json';

function Crew({changeCurrentView, showMobileMenu}) {
  const [crew, changeCrew] = useState('Anousheh Ansari');
  const renderData = data.crew.find(x => x.name === crew);

  return (
    <div className = 'crew'>
    <Nav changeCurrentView = {changeCurrentView} showMobileMenu = {showMobileMenu}/>
    <div className="crew-content">
      <div className="crew-left-content">
        <p className="title">02 MEET YOUR CREW</p>
        <p className='role'>{renderData.role.toUpperCase()}</p>
        <p className='name'>{renderData.name.toUpperCase()}</p>
        <p className='text'> {renderData.bio} </p>
        <div className="carousel">
            {data.crew.map(x => {return <div key={x.name} onClick={() => changeCrew(x.name)} className="circle"></div>})}
        </div>
        
      </div>
      <div className="crew-right-content">
        <img src={require(`${renderData.images.png}`)} alt="" />
      </div>
    </div>
  </div>
  )
}

export default Crew;
