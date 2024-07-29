import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import signupimg from './imges/signup-img.png';
import logo from './imges/google-icon.png';
import Footerfile from './Footerfile';
import abovebuttonimg from './imges/Fill with Up Arrow.png'


function Signup() {
  const clicked=()=>{
    
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
}
  return (
    <div>
      <div className='flex justify-between pr-20 mt-20 mb-20 flex-wrap '>
        <div className='sign-up-img'>
          <img src={signupimg} alt="" />
        </div>
        <div className='signup-text-side'>
          <h2>Create an account</h2>
          <h5>Enter your details below</h5>
          <input type="text" name="" id="" placeholder='Name'/>
          <input type="email" placeholder='Email or Phone No'/>
          <input type="password" placeholder='Password'/>
          <button id='create-account'>Create Account</button>
          <div className='singup-google'>
            <button>
              <img src={logo} alt="" />
              <p>Sign up with Google</p>
            </button>
          </div>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
      <div className='above-button'>
        <button onClick={clicked}><img src={abovebuttonimg} alt="" /></button>
      </div>
      <Footerfile/>
    </div>
  );
}

export default Signup;
