import React from 'react'
import './Card.css'
import { useSelector } from 'react-redux'
import CartItem from './cartItem';
import { products } from '../products';
import { Link } from 'react-router-dom';
import Footerfile from './Footerfile';
import "./About.css"

const Card = () => {
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
                <Link id='home' to="/home">Home  /   </Link>
                <Link to="/card"> Card</Link>
            </div>
            <div className='heading-div-quantity'>
                <p>
                    product
                </p>

                <p id='price-div'>
                    Price
                </p>
                <p>
                    Quantity
                </p>
                Subtotal
            </div>
            <div className="card-div-main">

                <div className='p-5'>
                    {carts.map((item, key) =>
                        <CartItem key={key} data={item} />
                    )}
                </div>


            </div>
            <div className='main-div-button-retun-and-shope'>
                <div className='button-return'>
                    <Link to='/wishlistt'>  <button>Return To Shop</button></Link>

                </div>

                <div className='update-cart'>
                    <button>Update Cart</button>
                </div>
            </div>
            <div className='main-hole-total-div'>
                <div className='input-button-div-cart'>
                    <input type="text" name="" id="" placeholder='Coupon Code' />
                    <button>Apply Coupon</button>
                </div>
                <div className='main-div-total'>
                    <div className=''><h3>Cart Total</h3></div>
                    <div className='every-div-para-and-heading'><h5>Subtotal</h5>
                        <p>${calculateTotalPrice()}</p>
                    </div>
                    <div className='every-div-para-and-heading'><h5>Shipping:</h5>
                        <p>Free</p>
                    </div>
                    <div className='every-div-para-and-heading' id='totao-id'><h5>Total:</h5>
                        <p>${calculateTotalPrice()}</p>
                        {/* <div className='total-price'>
                <h3>Total Price: /h3>
            </div> */}
                    </div>
                    <div className='button-process'>
                        <Link to='/checkout'>
                            <button>Procees to checkout</button>
                        </Link>
                    </div>

                </div>
            </div>
            <Footerfile />
        </div>

    )
}


export default Card
