import React from 'react' 
import { useSelector, useDispatch } from 'react-redux' 
import cross from './imges/Vector (5).png'
import FavouriteItem from './FavouriteItemjsx';
import { toggleStatusTab } from '../stores/cart';
import { Link } from 'react-router-dom';
import './Cartpage.css'
const FavouriteTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();
    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }
  return (
    <div className={`fixed flex text-black  top-0 right-0 bg-white shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
    transform transition-transform duration-500 
    ${statusTab === false ? "translate-x-full" : ""} left-item
    `}>

        <div className='ceess' ><h2 className='p-5 text-black text-3xl'>Shopping Cart</h2>
        <div className='cross' onClick={handleCloseTabCart}><img src={cross} alt="" /><span>x</span> </div></div>
        
        <div className='p-5'>
                {carts.length > 0 ? (
                    carts.map((item, key) => (
                        <FavouriteItem key={key} data={item} />
                    ))
                ) : (
                    <div className="empty-cart-message">
                        <p className='text-lg font-semibold text-center mt-5 text-gray-500'>OOps! No Product Found Please add items to the cart.</p>
                    </div>
                )}
            </div>
        <div className='nnn grid grid-cols-3 gap-4'>
          
            <Link to='./cartpage' > <button className='three-btns'>Cart</button></Link>
            

            <Link to='/checkout'><button className='three-btns'> CHECKOUT</button></Link>
            <Link to={'/comparison'}><button className='three-btns'>Comparison</button></Link>
        </div>
    </div>
  )
}

export default FavouriteTab