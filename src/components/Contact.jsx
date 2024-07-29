import React from 'react'
import phone from './imges/mobile-icone.png'
import message from './imges/message-icone.png'

import { Link } from 'react-router-dom';
import Footerfile from '../components/Footerfile';
import abovebuttonimg from './imges/Fill with Up Arrow.png'



function Contact() {
  const clicked=()=>{
    
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
}
  return (
    <div>
        <div className='home-cntact-link '>
            <Link id='home' to="/home">Home  /   </Link>
            <Link to="/contact"> Contact</Link>
        </div>
      <div className=' flex flex-wrap main-div-contact'>
        <div className='left-side-contact-section'>
<div className='complate-left-side-img-text-above-line'>
<div className='img-text-left-contact'>
    <div className='message-div-img'><img src={phone} alt="" /></div>

<p>Call To Us</p>
</div>
<div className='paragraph-div'>
    <p>We are available 24/7, 7 days a week.</p>
    <p>Phone: +8801611112222</p>
</div>
</div>
<div className='new-line'>
</div>
<div className='complate-left-side-img-text-above-line blow-div'>
<div className='img-text-left-contact'>
    <div className='message-div-img'>
    <img src={message} alt="" />
    </div>

<p>Write To US</p>
</div>
<div className='paragraph-div'>
    <p>Fill out our form and we will contact you within 24 hours.</p>
    <p>Emails: customer@exclusive.com</p>
    <p>Emails: support@exclusive.com</p>
</div>
</div>

        </div>

        <div  className='right-side-contact-section' >
<div className='input-first3'>
    <input type="text" placeholder='Your Name' />
    <input type="text" placeholder='Your Email' />
    <input type="phone numberS"  placeholder='Your Phone Number'/>
</div>
<div className='input-message' >
<input type="text" placeholder='Your Message' />
</div>
<button>Send Message</button>
        </div>
       
      </div>
      <div className='above-button'>
        <button onClick={clicked}><img src={abovebuttonimg} alt="" /></button>
      </div>
      <Footerfile/>
    </div>
  )
}

export default Contact
