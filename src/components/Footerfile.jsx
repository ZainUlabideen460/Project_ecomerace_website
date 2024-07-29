import React from 'react'
import inputimg from './imges/inputimg.png'
import qrcode from './imges/Qrcode 1.png'
import play from './imges/GooglePlay.png'
import app from './imges/AppStore.png'
import linkined from './imges/Icon-Linkedin.png'
import facebook from './imges/Icon-Facebook.png'
import instagram from './imges/Group (1).png'
import tiwter from './imges/Group.png'
import  './Footerandabove.css'

function Footerfile() {
  return (
    <div>
       <div className='footer'>
<div className='footer-div-inner'>
<div className="same-div-footer-section">
<h3>Exclusive</h3>
<h5>Subscribe</h5>
<p>Get 10% off your first order</p>
<div className='input-div-foote'>
<input type="text" placeholder='enter your email' />
<div className='img-footer'><img  src={inputimg  } alt="" /></div>

</div>

</div>
<div className="same-div-footer-section">
<h2>Support</h2>
<p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
<p>exclusive@gmail.com</p>
<p>+88015-88888-9999</p>
</div>
<div className="same-div-footer-section">
<h2>Account</h2>
<p>My Account</p>
<p>Login / Register</p>
<p>Cart</p>
<p>Wishlist</p>
<p>Shop</p>
</div>
<div className="same-div-footer-section">
<h2>Quick Link</h2>
<p>Privacy Policy</p>
<p>Terms Of Use</p>
<p>FAQ</p>
<p>Contact</p>
</div>
<div className="same-div-footer-section">
    <h2>Download App</h2>
    <p>Save $3 with App New User Only</p>
    <div className='q-sann'>
<div>
  <img src={qrcode} alt="" />
</div>
<div>
  <img src={play} alt="" />
  <img src={app} alt="" />
</div>
    </div>
    <div className='icone-footer'>
      <img src={facebook} alt="" />
      <img src={tiwter} alt="" />
      <img src={instagram} alt="" />
      <img src={linkined} alt="" />
    </div>
</div>
</div>

<div className='line-and-copyright-div'>
<hr id='hr-id'/>
<p>
@Copyright Rimel 2022. All right reserved
</p>
</div>

      </div>
     
    </div>
  )
}

export default Footerfile
