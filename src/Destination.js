import React from 'react';
import Nav from './Nav';
import './Destination.css';
import data from './assets/data.json';
import { useState } from 'react';

function Destination({changeCurrentView, showMobileMenu}) {
  const [destination, changeDestination] = useState('Moon');
  const renderData = data.destinations.find(x  => x.name === destination);

  return (
    <div className='destination'>
      <Nav changeCurrentView = {changeCurrentView} showMobileMenu = {showMobileMenu}/>
      <div className="destination-content">
        <div className="destination-left-content">
          <p className='title'>01 PICK YOUR DESTINATION</p>
          <img src={require(`${renderData.images.png}`)} alt="" />
        </div>
        <div className="destination-right-content">
          <ul>
            {data.destinations.map(x => {return <li key={x.name} onClick={() => changeDestination(x.name)}>{x.name.toUpperCase()}</li>})}
          </ul>
          <p className='lead'>{renderData.name.toUpperCase()}</p>
          <p className='text'>{renderData.description}</p>
          <span className='content-line'></span>
          <div className="info">
            <div className='info-left'>
              <p className='info-title'>AVG. DISTANCE</p>
              <p className='info-data'>{renderData.distance}</p>
            </div>
            <div className='info-right'>
              <p className='info-title'>EST. TRAVEL TIME</p>
              <p className='info-data'>{renderData.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination;
