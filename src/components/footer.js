import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ContactMailIcon from '@mui/icons-material/ContactMail';
export default function Footer() {
   return(
  // <a href="#"><i class="fa fa-instagram"></i></a>
  // <a href="#"><i class="fa fa-twitter"></i></a>
  // <a href="#"><i class="fa fa-flickr"></i></a>
  // <a href="#"><i class="fa fa-linkedin"></i></a>
    <div className='foot'>
    <p className='abc' >
    Reach us on
    <ul>
    <li>
    <InstagramIcon/>
    </li>
    <li>
    <TwitterIcon/>
    </li>
    <li>
    <ContactMailIcon/>
    </li></ul></p>
    
    </div>
  )
}
     