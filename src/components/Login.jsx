import React from 'react'
import './Login.css'
import abovebuttonimg from './imges/Fill with Up Arrow.png'
import signupimg from './imges/signup-img.png'

import Footerfile from './Footerfile'

function Login() {
  const clicked = () => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div>

      <div className='flex justify-between pr-20 mt-20 mb-20 flex-wrap'>
        <div className='sign-up-img'>
          <img src={signupimg} alt="" />
        </div>
        <div className='signup-text-side'>
          <h2>Log in to Exclusive</h2>
          <h5>Enter your details below</h5>
          <input type="email" placeholder='Email or Phone No' />
          <input type="password" placeholder='Password' />

          <div className='login-froget-button'>
            <button id='create-account'>Log In</button>
            <p>Forget Password?</p>

          </div>

        </div>
      </div>
      <div className='above-button'>
        <button onClick={clicked}><img src={abovebuttonimg} alt="" /></button>
      </div>
      <Footerfile />
    </div>
  )
}

export default Login
