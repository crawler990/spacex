import React, { useState } from 'react';
import data from './assets/data.json';
import Nav from './Nav';
import './Technology.css';

function Technology({changeCurrentView, showMobileMenu}) {
  const [technology, changeTechnology] = useState('Launch vehicle');
  const renderData = data.technology.find(x => x.name === technology);

  return (
    <div className='technology'>
      <Nav changeCurrentView = {changeCurrentView} showMobileMenu = {showMobileMenu}/>
      <div className="technology-content">
        <div className="technology-left-content">
          <p className="title">03 SPACE LAUNCH 101</p>
          <div className="content">
            <div className="select">
                {data.technology.map((x,index) => {
                  return <div 
                  key={x.name} 
                  onClick={() => { 
                    changeTechnology(x.name)
                    }}>
                    <span className="number">{index+1}</span>
                  </div>
                  })}
            </div>

            <div className='text'>
                <p className='terminology'>THE TERMINOLOGY...</p>
                <p className='lead'>{renderData.name.toUpperCase()}</p>
                <p className='info'>{renderData.description}</p>
            </div>
          </div>
        </div>
        <div className="technology-right-content">
          <picture>
            <source media='(min-width: 1160px)' srcSet={require(`${renderData.images.portrait}`)}/>
            <img src={require(`${renderData.images.landscape}`)} alt="" />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default Technology;
