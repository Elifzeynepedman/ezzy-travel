import React from 'react'
import './tripThemes.css'


import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {AiFillStar} from 'react-icons/ai'
import BeachSideHotel from '../../assets/beachside hotels.jpg'
import BeachAndCulture from '../../assets/beach and culture.jpg'
import Boutique from '../../assets/boutique.jpg'
import Cruise from '../../assets/cruise.jpg'
import Cabin from '../../assets/cabin.jpg'
import Food from '../../assets/food.jpg'
import Honeymoon from '../../assets/honeymoon.jpg'
import kids from '../../assets/images.jpg'
import Ski from '../../assets/Ski hotels.jpg'
import Thermal from '../../assets/Thermal Hotels.jpg'


const TripThemes = () => {
  return (
    <div className='TripThemes'>
      <h2>Trip Themes</h2>
      <Splide options={ { type   : 'loop', perPage: 4, perMove: 1, gap:'-3em'} } aria-label="React Splide Example">
      <SplideSlide>
        <img src={BeachAndCulture} alt="Beach and culture" className='hotel-photos'/>
        <p className='center-text'>Beach and Culture</p>
      </SplideSlide>
      <SplideSlide>
        <img src={BeachSideHotel} alt="BeachSide" className='hotel-photos'/>
        <p className='center-text'>Beachside Hotels</p>

      </SplideSlide>
      <SplideSlide>
        <img src={Boutique} alt="Boutique" className='hotel-photos'/>
        <p className='center-text'>Boutique Hotels</p>

      </SplideSlide>
      <SplideSlide>
        <img src={Cruise} alt='Cruise' className='hotel-photos'/>
        <p className='center-text'>Cruises</p>

      </SplideSlide>
      <SplideSlide>
        <img src={Cabin} alt="Cabin"className='hotel-photos'/>
        <p className='center-text'>Cabins</p>

      </SplideSlide>
      <SplideSlide>
        <img src={Food} alt="Food" className='hotel-photos'/>
        <p className='center-text'>Food</p>

      </SplideSlide>
      <SplideSlide>
        <img src={Honeymoon} alt="Honeymoon" className='hotel-photos'/>
        <p className='center-text'>Honeymoon</p>

      
      </SplideSlide>
      <SplideSlide>
        <img src={kids} alt="kids" className='hotel-photos' id='margin'/>
        <p className='center-text'>kid Friendly Hotels</p>

       
      </SplideSlide>
      <SplideSlide>
        <img src={Ski} alt="Ski" className='hotel-photos' id='margin'/>
        <p className='center-text'>Ski Hotels</p>

       
      </SplideSlide>  <SplideSlide>
        <img src={Thermal} alt="Thermal" className='hotel-photos' id='margin'/>
        <p className='center-text'>Thermal Hotels</p>

       
      </SplideSlide>
    </Splide>
    </div>
  )
}

export default TripThemes
