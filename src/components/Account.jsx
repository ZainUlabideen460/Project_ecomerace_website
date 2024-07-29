import React, {  useState } from 'react';
import './Account.css';
import { Link } from 'react-router-dom';
import './Contact.css'
import abovebuttonimg from './imges/Fill with Up Arrow.png'
import Footerfile from './Footerfile';

function Account() {
  const [showProfile, setShowProfile] = useState(false);
  const [showAddress, setShowAddress]=useState(false);
  const myAddress=()=>{
    setShowAddress(true);
    setShowProfile(false);
  }

  const myProfile = () => {
    setShowProfile(true);
    setShowAddress(false);
  }
  const clicked=()=>{
    
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })

}

  return (
    <div>
      <div className='home-contact-link'>
        <Link id='home' to="/home">Home / </Link>
        <Link to="/account"> Account</Link>
      </div>
      <div className='wellcome-text'>
        <p>Welcome! <span>Md Rimel</span></p>
      </div>
      <div className='main-div-both'>
        <div className='main-div-left-side-text'>
          <div className='button-and-text'>
            <h2>Manage My Account</h2>
            <button id='1' onClick={myProfile}>My Profile</button>
            <button id='2' onClick={myAddress}>Address Book</button>
            <button>My Payment Options</button>
          </div>
       
          <div className='button-and-text'>
            <h2>My Orders</h2>
            <button>My Returns</button>
            <button>My Cancellations</button>
          </div>
          <div className='button-and-text'>
           
            <h2>
              <Link to='/wishlistt'>My WishList</Link>
              </h2>
          </div>
        </div>
        {showProfile && (
          <div className='main-edit-profile'>
            <h2>Edit Your Profile</h2>
            <div className='input-and-text-main-div'>
              <div className='input-and-text'>
                <h5>First Name</h5>
                <input type="text" placeholder='Md' />
              </div>
              <div className='input-and-text'>
                <h5>Last Name</h5>
                <input type="text" placeholder='Rimel' />
              </div>
            </div>
            <div className='input-and-text-main-div'>
              <div>
                <h5>Email</h5>
                <input type="text" placeholder='rimel1111@gmail.com' />
              </div>
              <div>
                <h5>Address</h5>
                <input type="text" placeholder='Kingston, 5236, United States' />
              </div>
            </div>
            <div className='div-password'>
              <h5>Password Changes</h5>
              <input type="password" placeholder='Current Password' />
              <input type="password" placeholder='New Password' />
              <input type="password" placeholder='Confirm New Password' />
            </div>
            <div className='last-buttton'>
                <button>Cancele</button>
                <button id='button2'>Save Changes</button>
            </div>
          </div>
        )}
        {
          showAddress && (
    <p> this is address div</p>
           
          )  
        }
      </div>
      <div className='above-button'>
        <button onClick={clicked}><img src={abovebuttonimg} alt="" /></button>
      </div>
      <Footerfile/>
    </div>
  );
}

export default Account;
