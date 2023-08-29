import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime, faHouse } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
            <div className="headerListItem">
                <FontAwesomeIcon icon={faHouse} className='icons_header'/>
                <span><Link to="/" className="routerLink">Home</Link></span>
                </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faUserTie} className='icons_header'/>
                <span><Link to="/experts" className="routerLink">Our Experts</Link></span>
             </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBusinessTime} className='icons_header'/>
                <span><Link to="/services" className="routerLink">Our Services</Link></span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header