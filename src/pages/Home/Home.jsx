import React from 'react'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import BestHotel from '../../components/BestHotel/BestHotel'
import './home.css'



import TopCities from '../../components/TopCities/TopCities'
import TripThemes from '../../components/TripThemes/TripThemes'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div>
        <Header/>
        <Search/> 
        <TopCities/>
        <BestHotel/>
        <TripThemes/>
        <Footer/>

    </div>
  )
}

export default Home
