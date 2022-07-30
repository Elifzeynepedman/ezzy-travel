import React from 'react'
import './bestHotel.css'

import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {AiFillStar} from 'react-icons/ai'
import Voyage from '../../assets/voyage.jpg'
import Susesi from '../../assets/Susesi.jpg'
import Ela from '../../assets/Ela.jpg'
import BlueDreams from '../../assets/BlueDreamsResort.webp'
import Rixos from '../../assets/Rixos.jpg'
import Mitacle from '../../assets/Miracle Resort Hotel.jpg'
import Swandor from '../../assets/swandor.jpg'
import WhiteCity from '../../assets/WhiteCityResort.jpg'

const BestHotel = () => {

  return (
    <div className="bestHotel">
    <h2> Best Hotel Opportunities </h2>
    <Splide options={ { type   : 'loop', perPage: 4, perMove: 1, gap:'-3em'} } aria-label="React Splide Example">
      <SplideSlide>
        <img src={Swandor} alt="swandor" className='hotel-photos'/>
        <p className="Hotel_name">Swandor Topkapi Palace</p>
        <p className="Hotel_loc">Kundu / Aksu, Lara, Antalya</p>
        <div className='hotel-star'>
          <AiFillStar size={13} color='#0062ff81' />
          <p className='star'>8.7</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <img src={Voyage} alt="Voyage Sorgun" className='hotel-photos'/>
        <p className="Hotel_name">Voyage Sorgun</p>
        <p className="Hotel_loc">Sorgun, Side, Antalya</p>
        <div className='hotel-star'>
          <AiFillStar size={13} color='#0062ff81'/>
          <p className='star'>9.5</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <img src={Susesi} alt="Susesi" className='hotel-photos'/>
        <p className="Hotel_name">Susesi Luxury Resort </p>
        <p className="Hotel_loc">Belek, Serik, Antalya</p>
        <div className='hotel-star'>
          <AiFillStar size={13} color='#0062ff81'/>
          <p className='star'>8.9</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <img src={Ela} alt='Ela' className='hotel-photos'/>
        <p className="Hotel_name">Ela Excellence Resort Belek </p>
        <p className="Hotel_loc">Belek, Serik, Antalya</p>
        <div className='hotel-star'>
          <AiFillStar size={13} color='#0062ff81'/>
          <p className='star'>8.8</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <img src={BlueDreams} alt="Blue Dreams Resort"className='hotel-photos'/>
        <p className="Hotel_name">Blue Dreams Resort</p>
        <p className="Hotel_loc">Torba, Bodrum, Muğla</p>
        <div className='hotel-star'>
          <AiFillStar size={13} color='#0062ff81'/>
          <p className='star'>7.9</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <img src={Rixos} alt="Rixos" className='hotel-photos'/>
        <p className="Hotel_name">Rixos Premium Belek</p>
        <p className="Hotel_loc">İleribaşı Mevkii, Belek, Antalya</p>
        <div className='hotel-star'>
          <AiFillStar size={13} color='#0062ff81'/>
          <p className='star'>9.5</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <img src={WhiteCity} alt="White City Resort" className='hotel-photos'/>
        <p className="Hotel_name">White City Resort Spa</p>
        <p className="Hotel_loc"> Antalya - Alanya-Türkler</p>
        <div className='hotel-star'>
          <AiFillStar size={13} color='#0062ff81'/>
          <p className='star'>8.5</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <img src={Mitacle} alt="Miracle Resort" className='hotel-photos' id='margin'/>
        <p className="Hotel_name">Miracle Resort Otel</p>
        <p className="Hotel_loc">Antalya - Lara-Kundu</p>
        <div className='hotel-star'>
          <AiFillStar size={13} color='#0062ff81'/>
          <p className='star'>9.3</p>
        </div>
      </SplideSlide>
     
    </Splide>
  
    </div>
  )
}

export default BestHotel
