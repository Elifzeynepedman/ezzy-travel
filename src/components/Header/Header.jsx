import React from 'react'
import './header.css'
import {FaBed,FaPlane,FaTaxi} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header_container'>
        <div className="logo">EzzyTravel</div>
        <div className="header_link">
          <div className="header_links">
          <div className="lins" >
             <FaBed style={{color:"white",marginTop:"4px"}}/>
             <p className='link'><Link to="/" className='links'>Stays</Link></p>
             </div>

          </div>
          <div className="header_links">
          <div className="lins" >
             <FaPlane style={{color:"white",marginTop:"4px"}} />
             <p className='link'><Link to="/flights" className='links'>Flights</Link></p>
             </div>

          </div>
          <div className="header_links">
            <div className="lins" >
             <FaTaxi style={{color:"white",marginTop:"4px"}}/>
             <p className='link'><Link to="/taxis" className='links'>Airport Taxis</Link></p>
             </div>
          </div>
        </div>

        <div className='account'>
          <button className='account_btn'> Create Account</button>
          <button className='account_btn'> Sign In</button>
          

        </div>
        
    </div>
  )
}

export default Header
