import React from 'react'
import './Checkout.css'
import { useSelector} from 'react-redux'
import { products } from '../products';

import "./About.css"
import Forcardcheckout from './Forcardcheckout';
import imgbank from './imges/Frame834.png'
import { Link } from 'react-router-dom';
import Footerfile from './Footerfile'
const Checkout = () => {
  const carts = useSelector(store => store.cart.items);
  const cartItems = useSelector(state => state.cart.items);
 
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const productDetail = products.find(product => product.id === item.productId);
      return total + (productDetail.price * item.quantity);
    }, 0);
  };
  return (
    <div>

      <div className='home-cntact-link'>
        <Link id='home' to="/account">Account  /   </Link>
        <Link id='home' to="/account"> My Account /</Link>
        <Link id='home' to="/wishlistt"> Product /</Link>
        <Link id='home' to="/card"> View Cart /</Link>
        <Link to="/checkout"> CheckOut </Link>
      </div>

      <div className='main-div-input-side-hole'>

        <div className='input-main-div'>
          <h2>Billing Details</h2>
          <div className='every-input' >
            <h5>First Name*</h5>
            <input type="text" name="" id="" />
          </div>

          <div className='every-input' >
            <h5>Company Name</h5>
            <input type="text" name="" id="" />
          </div>
          <div className='every-input' >
            <h5>Street Address*</h5>
            <input type="text" name="" id="" />
          </div>
          <div className='every-input' >
            <h5>Apartment, floor, etc. (optional)</h5>
            <input type="text" name="" id="" />
          </div>
          <div className='every-input' >
            <h5>Town/City*</h5>
            <input type="text" name="" id="" />
          </div>
          <div className='every-input' >
            <h5>Phone Number*</h5>
            <input type="text" name="" id="" />
          </div>
          <div className='every-input' >
            <h5>Email Address*</h5>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label>
              <input type="checkbox"  />
              Save this information for faster check-out next time
            </label>
          </div>

        </div>
        {/* card side right  */}
        <div className='right-side-div-order'>
          <div className='p-5 map-div-check'>
            {carts.map((item, key) =>
              <Forcardcheckout key={key} data={item} />
            )}
          </div>
          <div className='main-div-total-checkout'>
            <div className='every-div-para-and-heading'><h5>Subtotal</h5>
              <p>${calculateTotalPrice()}</p>
            </div>
            <div className='every-div-para-and-heading'><h5>Shipping:</h5>
              <p>Free</p>
            </div>
            <div className='every-div-para-and-heading' id='totao-id'><h5>Total:</h5>
              <p>${calculateTotalPrice()}</p>
            </div>
            <div className='main-div-bank'>
              <div className='div-bank-img-bank'>
                <div className='div-radio-par'>
                  <input type="radio" name="pay" Clicked readOnly id="" />
                  <p>Bank</p>
                </div>

                <div><img src={imgbank} alt="" /></div>
              </div>
              <div className='div-radio-par'>
                <input type="radio" name="pay" id="" />
                <p>Cash on delivery</p>
              </div>


              <div className='input-div-button-apply-coup'>
                <div className='input-div'><input type="text" name="" id="" placeholder='Coupon Code' /></div>
                <div className='button-apply'><button>Apply Coupon</button></div>
              </div>

            </div>
            <div className='place-order'><button onClick={() => {
              alert('Your Order Place Successfull ')
            }}>Place Order</button></div>

          </div>

        </div>
      </div>
      <Footerfile />
    </div>
  )
}

export default Checkout
