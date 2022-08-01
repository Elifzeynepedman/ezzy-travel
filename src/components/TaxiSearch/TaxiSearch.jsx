import React from 'react'
import {useState} from 'react'
import './taxiSearch.css'
import DatePicker from "react-datepicker";
import { TimePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import {AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai'
const TaxiSearch = ({ children }) => {
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
            <input className='pick-up' placeholder='Pick-up Location'/>
            <input className='pick-up' placeholder='Destination?'/>
            <DatePicker  className="date-picker" selected={startDate} onChange={(date) => setStartDate(date)} />
            <TimePicker onChange={onChange} className="time" defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
            <div className="car-taxi">
                <p>{`${cars.car} taxis`}</p>
                <div className="arrows">
                    <AiOutlineArrowUp className="arrowdisable"  onClick={()=>cars.car<9 && handleOptions("car","i")}/>
                    <AiOutlineArrowDown  className="arrowdisable" onClick={()=>cars.car>1 && handleOptions("car","d")}/>
                </div>               
                
            </div>
          
             </div>
      </div>
    </div>
  )
}

export default TaxiSearch
