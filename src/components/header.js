import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../stores/cart';
import iconCart from '../assets/images/iconCart.png';
import { toggleFavorite } from '../stores/cart';
import heartlarg from './imges/heartlarg.png'
import './Herosection.css';
import './header.css';
import searchimg from './imges/search.png';
import usee from './imges/user.png';
import uses from './imges/user (2).png';
import order from './imges/order.png';
import cross from './imges/cross.png';
import logout from './imges/logout.png';
import star from './imges/whitestar.png';
import menuIcon from './imges/more.png'; 

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const toggleNavbar = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };
  const handleToggleFavorite = (productId) => {
    dispatch(toggleFavorite(productId));
  // const favoriteItems = useSelector((store) => store.cart.favorites);
  };
  const favoriteItems = useSelector((store) => store.cart.favorites);

  useEffect(() => {
    setFavTotalQuantity(favoriteItems.length);
  }, [favoriteItems]);
  const [FavtotalQuantity, setFavTotalQuantity] = useState(0);
  return (
    <header>
      {/* summer-text-main-div */}
      <div className="flex justify-around gap-20 flex-wrap summer-text-main-div">
        <div>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span>
            <Link to='/wishlistt'>
            <button>Shop Now</button>
            </Link>
             
            </span>
          </p>
        </div>

        <div className="option-div-header">
          <select>
            <option value="English">English</option>
          </select>
        </div>
      </div>
      {/* navbar-div-main */}
      <div className=" navbar-div-main">
        <div className='mt-2'><h1>Exclusive</h1></div>
        {/* Toggle button for small screens */}
        <div className="menu-icon" onClick={toggleNavbar}>
          <img src={menuIcon} className='w-10 h-10' alt="Menu Icon" />
        </div>
        <div className={`navbar-content ${isMenuOpen ? 'open' : ''}`}>
          {/* Home, about, etc. div */}
          <di className='flex justify-around pr-20 gap-20 mt-3 home-div' >
          <ul className=' flex justify-around gap-20'>
            <li className='pr-10'>
              <Link to="/home"> Home</Link>
            </li>
            <li className='pr-5'>
              <Link to="/contact"> Contact</Link>
            </li>
            <li className='pr-10'>
              <Link to="/about"> About</Link>
            </li>
            <li className=''>
              <Link to="/signup"> Sign up</Link>
            </li>
          </ul>
          </di>
          
          <div className="input-and-icons  flex gap-5">
            {/* Input-and-search-div */}
            <div className="input-and-search-div flex">
              <input type="text" placeholder="What are you looking for?" />
              <div>
                <img src={searchimg} alt="Search" />
              </div>
            </div>
            <div className="icons flex gap-4">
              {/* Cart icon */}
              <div
                className="w-10 h-10 border-none flex justify-center items-center relative icone-card"
                onClick={handleOpenTabCart}
              >
                <img src={iconCart} alt="Cart" className="w-6" />
                <span
                  className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm
                w-5 h-5 rounded-full flex justify-center items-center"
                >
                  {totalQuantity}
                </span>
              </div>
              {/* User icon */}
              <div className="usre-div relative">
                <img id='img-user' src={usee} alt="User" onClick={toggleMenu} />
                <div className={`div-menu ${isOpen ? 'block' : 'hidden'}`}>
                  {isOpen && (
                    <ul>
                      <li>
                        <img src={uses} alt="Account" />
                        <Link to={'./account'}>Manage My Account</Link>
                      </li>
                      <li>
                        <img src={order} alt="Order" />
                        <Link to={'./order'}>My Order</Link>
                      </li>
                      <li>
                        <img src={cross} alt="Cancellations" />
                        <Link to={'./cancellations'}>My Cancellations</Link>
                      </li>
                      <li>
                        <img src={star} alt="Reviews" />
                        <Link to={'./reviews'}>My Reviews</Link>
                      </li>
                      <li>
                        <img src={logout} alt="Logout" />
                        <Link to={'./logout'}>Logout</Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              {/* Heart icon */}
              
              <div
                className="w-10 h-10 border-none flex justify-center items-center relative icone-card heart-div-img "
              onClick={() => handleToggleFavorite("someProductId")}
              >
                 <img className='' src={heartlarg} alt="Heart" />
                <span
                  className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm
                w-5 h-5 rounded-full flex justify-center items-center"
                >

{FavtotalQuantity}
                </span>
              
                {/* <img id='img-user' src={heartimg} alt="Heart" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="hr-line" /> */}
    </header>
  );
};

export default Header;
