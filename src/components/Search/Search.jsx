import React from 'react'
import {useState} from 'react'
import { DateRange } from 'react-date-range';
import {format} from 'date-fns'
import {FaBed} from 'react-icons/fa'
import {BiCalendar,BiUser} from 'react-icons/bi'

import './search.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
const Search = () => {
  const [openDate, setOpenDate]=useState(false)
  const [openPeople, setOpenPeople]=useState(false)

  const[people, setPeople]=useState(
    {
      adult:1,
      children:2,
      room:1
    }
  )

  const [date,setDate]=useState([
    { startDate: new Date(),
    endDate:new Date(),
    key: 'selection'
    }
  ])

  const closeDate=()=>{
    setOpenDate(!openDate);
    setOpenPeople(false);
  }
  const closePeople=()=>{
    
    setOpenPeople(!openPeople);
    setOpenDate(false);

  }

  const handleOptions=(name, operation)=>{
    setPeople(prev=>{return {
          ...prev,
           [name]:operation==="i" ? people[name] + 1 : people[name] - 1  
        };
      });
  };

  return (
    <div className="search-container">
      <div className="search-item">
      <div className='place'>
         <FaBed size={22} className="icon"/>
         <div className='where'>
         <input type="text" placeholder='Where are you going?' className='search-input'/>
      </div>
      </div>
      <div className="date-container">
      <BiCalendar size={22} className="icon-cal"/>
      <p onClick={closeDate} className="headerSearchText">{`${format(date[0].startDate,  "MM/dd/yyyy")} to ${format(date[0].endDate,  "MM/dd/yyyy")}`} </p>
     
      {openDate && <DateRange editableDateInputs={true} 
               onChange={item=>setDate([item.selection])}
               moveRangeOnFirstSelection={false}
               ranges={date}
               className="date"/>
  }
       </div>

  
       <div className="people-container">
          <div className="people">
            <BiUser size={22} className="icon-people"/>
            <p  onClick={closePeople} className="headerSearchText">{`${people.adult} adult ${people.children} children ${people.room} rooms`}</p>
            
          {openPeople && 
            <div className="count-people">  
              <div className='people-incdec'> 
                <p className="person-name">Adults</p>
                <button  className='btn-count'disabled={people.adult<=1} onClick={()=>handleOptions("adult","d")}>-</button>
                <p className="person-count">{`${people.adult}`}</p>
                <button className='btn-count' onClick={()=>handleOptions("adult","i")}>+</button>
              </div>
              <hr className='hr-style'/>
              <div className='people-incdec'> 
                <p id="person-name-children">Children</p>
                <button className='btn-count' disabled={people.children<=0} onClick={()=>handleOptions("children","d")}>-</button>
                <p id="person-count-child" >{`${people.children}`}</p>
                <button className='btn-count' onClick={()=>handleOptions("children","i")}>+</button>
              </div>
              <hr className='hr-style'/>
              <div className='people-incdec'> 
                <p id="person-name-room">Rooms</p>
                <button className='btn-count' disabled={people.adult<=1} onClick={()=>handleOptions("room","d")}>-</button>
                <p className="person-count" >{`${people.room}`}</p>
                <button className='btn-count' onClick={()=>handleOptions("room","i")}>+</button>
              </div>
              
            </div>
}

          </div>


       </div>
       <button className="search"> Search </button>

      </div>

    </div>
  )
}

export default Search
