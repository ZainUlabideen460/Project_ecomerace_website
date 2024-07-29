import React from 'react' 
import { useSelector, useDispatch } from 'react-redux' 
import { toggleStatusTab } from '../stores/cart';
import Newcartitem from './Newcartitem';
import { Link } from 'react-router-dom';

const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();
    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }
  return (
    <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
    transform transition-transform duration-500
    ${statusTab === false ? "translate-x-full" : ""}
    `}>
        <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
        <div className='p-5'>
            {carts.map((item, key) => 
                <Newcartitem key={key} data={item}/>
            )}
        </div>
        <div className='flex justify-between'>
            <button className='bg-gray-600 flex align-center radius-5 text-white class-button-tab' onClick={handleCloseTabCart}>CLOSE</button>
            <Link to='/checkout'>
            <button className='bg-gray-600  text-white class-button-tab'>CHECKOUT</button>
            </Link>
            <Link to='/card'>
            <button className='bg-gray-600  text-white class-button-tab '>CARD</button>
            </Link>

        </div>
    </div>
  )
}

export default CartTab