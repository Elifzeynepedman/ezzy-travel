import React from 'react'
import FlightSearch from '../../components/FlightSearch/FlightSearch'
import './flights.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const Flights = () => {
  return (
    <div>
      <Header/>
      <FlightSearch/>
      <Footer/>
    </div>
  )
}

export default Flights
