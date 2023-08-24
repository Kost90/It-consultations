import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime, faCalendarDays, faHouse } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import {format} from 'date-fns';

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
                <FontAwesomeIcon icon={faHouse} />
                <span><Link to="/" className="routerLink">Home</Link></span>
                </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faUserTie} />
                <span><Link to="/experts" className="routerLink">Our Experts</Link></span>
             </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBusinessTime} />
                <span><Link to="/services" className="routerLink">Our Services</Link></span>
            </div>
        </div>
            {/* <div className="headerSearchBar">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faUserTie} />
                    <select name="experts" id="experts" className="headerSearchExperts">
                        <option value="">Select an expert</option>
                        <option value="Konstantyn">Konstantyn</option>
                        <option value="Prince">Prince</option>
                        <option value="Manuel">Manuel</option>
                    </select>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBusinessTime} />
                    <select name="service" id="service" className="headerSearchService">
                        <option value="">Select a service</option>
                        <option value="it">IT-Consultancy</option>
                        <option value="law">Legal Consultancy</option>
                        <option value="finance">Financial Consultancy</option>
                    </select>
                </div>
                
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays}/>
                    <span onClick={()=>setOpenDate(!openDate)}>{`From: ${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")} `}</span>
                    {openDate &&
                    <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date} className='date'/>  
                }
                </div>
               
            </div> */}
        </div>
    </div>
  )
}

export default Header