import React from 'react'
import './ExpertList.css';
import sara from '..//assets/e1.png'

const ExpertList = () => {
  return (
    <div className="expertListContainer">
        <div className='expertListItem'>
            <img src={sara}/>
            <h2>Sara</h2>
            <h3>IT-Specialist</h3>
            <button>Book appointment</button>
        </div>
        <div className='expertListItem'>
            <img src={sara}/>
            <h2>Sara</h2>
            <h3>IT-Specialist</h3>
            <button>Book appointment</button>
        </div>
        <div className='expertListItem'>
            <img src={sara}/>
            <h2>Sara</h2>
            <h3>IT-Specialist</h3>
            <button>Book appointment</button>
        </div>
        <div className='expertListItem'>
            <img src={sara}/>
            <h2>Sara</h2>
            <h3>IT-Specialist</h3>
            <button>Book appointment</button>
        </div>
        <div className='expertListItem'>
            <img src={sara}/>
            <h2>Sara</h2>
            <h3>IT-Specialist</h3>
            <button>Book appointment</button>
        </div>
    </div>
  )
}

export default ExpertList