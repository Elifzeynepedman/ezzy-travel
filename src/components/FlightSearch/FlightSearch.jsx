import React from 'react'
import {useState} from 'react'
import {IoIosAirplane} from 'react-icons/io'
import {VscArrowSwap,VscCalendar} from 'react-icons/vsc'
import './flightSearch.css'
import DatePicker from "react-datepicker";
import {AiOutlineUser} from 'react-icons/ai';
import "react-datepicker/dist/react-datepicker.css";
const FlightSearch = () => {
    
    const [startLoc, setStartLoc] = useState('');
    const [endLoc, setEndLoc] = useState('');

    const [startDate, setStartDate] = useState(new Date());
    const [people,setPeople]=useState({
        adult:1,
        children:0,
        infants:0
    });

    const [ open, setOpen]= useState(false);

    const closeOpen=()=>{
        setOpen(!open);
    }

    const handleOptions=(name, operation)=>{
        setPeople(prev=>{return {
              ...prev,
               [name]:operation==="i" ? people[name] + 1 : people[name] - 1  
            };
          });
      };

     
      const swapContent =()=>{
        console.log("Start:"+ startLoc);
        console.log("End:" + endLoc);

        setStartLoc(endLoc);
        setEndLoc(startLoc);
      


      }
  return (
    
    <div className='flight-search'>
      <h2>Search hundreds of flight sites at once</h2>
      <div className='flight-search-container'>
        <div className="flight-type">
            <button className='btn-type' id="not-selected">One-way</button>
            <button className='btn-type'>Round-tip</button>
        </div>
        <div className='search-info'>
            <div className="airport">
              <IoIosAirplane className='air-logo'/>
                <input  onChange={event => setStartLoc(event.target.value)} type="text" placeholder='Ankara(ESB)' className='airport-name-to' />
                <VscArrowSwap className='swap-logo' onClick={swapContent}/>
                <IoIosAirplane className='air-logo'/>

                <input  onChange={event => setEndLoc(event.target.value)} type="text" placeholder='New York(JFK)' className='airport-name-to'/>
            </div>
            <div className='Date'>
                <div className="div">
                    <VscCalendar className='cal-logo'/>
            <DatePicker  className="date-picker" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            </div>
            <div className='person'>
                <p onClick={closeOpen}>{`${people.adult} adults ${people.children} children ${people.infants} infants` }</p>
            {open && 
                <div className="people-counter">  
                <div className='incdec'> 
                  <p className="person-name-flights">Adults</p>
                  <button  className='btn-count'disabled={people.adult<=1} onClick={()=>handleOptions("adult","d")}>-</button>
                  <p className="person-count">{`${people.adult}`}</p>
                  <button className='btn-count' onClick={()=>handleOptions("adult","i")}>+</button>
                </div>
                <hr className='hr-style'/>
                <div className='incdec'> 
                  <p id="person-name-children-flights">Children</p>
                  <button className='btn-count' disabled={people.children<=0} onClick={()=>handleOptions("children","d")}>-</button>
                  <p id="person-count-child-flights" >{`${people.children}`}</p>
                  <button className='btn-count' onClick={()=>handleOptions("children","i")}>+</button>
                </div>
                <hr className='hr-style'/>
                <div className='incdec'> 
                  <p id="person-name-room-flights">Infants</p>
                  <button className='btn-count' disabled={people.infants<=0} onClick={()=>handleOptions("infants","d")}>-</button>
                  <p className="person-count" >{`${people.infants}`}</p>
                  <button className='btn-count' onClick={()=>handleOptions("infants","i")}>+</button>
                </div>
                
              </div>}
            </div>

            <button className="search-btn">Search</button>

        </div>


      </div>
    </div>
  )
}

export default FlightSearch
