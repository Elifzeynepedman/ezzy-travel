import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'></a>

      <ul className='permalinks'>
        <li><a href="#">Stays</a></li> 
        <li><a href="#about">Flights</a></li>   
        <li><a href="#experience">Airport Taxis</a></li> 
      </ul>    
      <div className="footer__copyright">
         <p>&copy; Elif Edman. All rights reserved.</p>
      </div>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/elif-edman-b4b425167/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Elifzeynepedman' target="_blank"><BsGithub/></a>
        <a href='https://www.instagram.com/elif.edman/'  target="_blank"><BsInstagram/></a>
      </div>

     
     
    </footer>
  )
}

export default Footer
