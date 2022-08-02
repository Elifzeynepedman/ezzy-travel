import React from 'react'
import {useState} from 'react'
import './taxiSearch.css'
import DatePicker from "react-datepicker";
import "antd/dist/antd.css";

import { TimePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import {VscCalendar} from 'react-icons/vsc'
import {BiTaxi} from 'react-icons/bi'
import {AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai'
import {GoLocation}  from  'react-icons/go'
const TaxiSearch = ({ children }) => {
  const format = 'HH:mm';

    const [startDate, setStartDate] = useState(new Date());
    const [cars,setCar]=useState({
        car:1
    })
    const onChange=(time, timeString)=>{
        console.log(time, timeString);
    }
    const handleOptions=(name, operation)=>{
        
        setCar(prev=>{return {
              ...prev,
               [name]:operation==="i" ? cars[name] + 1 : cars[name] - 1  
            };
          });
      };
      
    
  return (
    <div className='TaxiSearch'>
      <h2> Book Your Airport Taxi </h2>
      <div className="search-taxi">
        <div className="search-taxi-container">
          <GoLocation className='tax-loc' />
            <input className='pick-up' placeholder='Pick-up Location'/>
          <GoLocation className='tax-loc'/>
            <input className='pick-up' placeholder='Destination?'/>
            <div className="taxidate-container">
              <div className="div">
              <VscCalendar  className='taxi-cal-logo'/>
               <DatePicker  className="date-picker" selected={startDate} onChange={(date) => setStartDate(date)} />
               </div>
            </div>
            <div className='taxitime-container'>
            <TimePicker      popupStyle={{ width: 145}}       className="timepicker-background"  style={{backgroundcolor:'blue'}} showNow={false} defaultValue={moment('12:08', format)} format={format} />
            </div>

           
           <div className="car-taxi">
            <BiTaxi className='taxi-logo'/>
                <p>{cars.car==1? `${cars.car} Taxi` :  `${cars.car} Taxis`}</p>
                <div className="arrows">
                  <div className="div">
                    <AiOutlineArrowUp className="arrowdisable"  onClick={()=>cars.car<9 && handleOptions("car","i")}/>
                    <AiOutlineArrowDown  className="arrowdisable" onClick={()=>cars.car>1 && handleOptions("car","d")}/>
                </div>               
                </div>
            </div>

             </div>

      </div>
      <button className="taxi-search">Search</button>

    </div>
  )
}

export default TaxiSearch
