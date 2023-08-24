import React from 'react'
import './List.css';
import finance from '../assets/finance_s.png';
import it from '../assets/it_s.png';
import law from '../assets/law_s.png';

const List = () => {
  return (
    <div className="servContainer">
        <div className="servTile">
            <img src={finance}/>
            <div>
            <h1>Finance Consultancy</h1>
            <p>Usabiltiy thinking outside the box. Through the lens of i also believe it's important for every member to be involved and invested in our company and this is one way to do so, yet cloud native container based per my previous email, yet idea shower. Peel the onion today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud slow-walk our commitment. </p>
            <button>Book Service</button>
            </div>
        </div>
        <div className="servTile">
        <div>
            <h1>IT Consultancy</h1>
            <p>Usabiltiy thinking outside the box. Through the lens of i also believe it's important for every member to be involved and invested in our company and this is one way to do so, yet cloud native container based per my previous email, yet idea shower. Peel the onion today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud slow-walk our commitment. </p>
            <button>Book Service</button>
            </div>
            <img src={it}/>
            
        </div>
        <div className="servTile">
            <img src={law}/>
            <div>
            <h1>Law Consultancy</h1>
            <p>Usabiltiy thinking outside the box. Through the lens of i also believe it's important for every member to be involved and invested in our company and this is one way to do so, yet cloud native container based per my previous email, yet idea shower. Peel the onion today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud slow-walk our commitment. </p>
            <button>Book Service</button>
            </div>
        </div>
    </div>
  )
}

export default List