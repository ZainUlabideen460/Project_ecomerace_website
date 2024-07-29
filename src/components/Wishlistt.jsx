import React, { useEffect, useState } from 'react';
import ProductCart from './productCart';
import { products } from '../products';
import './Flashsaling.css';
import './Ensance.css';
import './Wishlist.css';
import Footerfile from './Footerfile';
import abovebuttonimg from './imges/Fill with Up Arrow.png'


const Wishlistt = () => {
  const flashSaleProducts = products.slice(0, 4);
  const bestSellingProducts = products.slice(4, 8);
  const newsale = products.slice(8, 12);
  const bestensance = products.slice(12, 16);
  const [isopen, setisopen] = useState(false);
  const [issopen, setissopen] = useState(false);

  const clicked = () => {
    setisopen(!isopen);
  };
  

  const newclicked = () => {
    setissopen(!issopen);
  };
  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
  },[])
  const clickedd=()=>{
    
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
}

  return (
    <div>
      <div className='flash-sale-text text-wishlist'>
        <div className='text-paragraph'><p>Wishlist (4)</p></div>
        <div className='button-move-to-all'>
          <button onClick={clicked}>
            Move All To Bag
          </button>
        </div>
      </div>

      <div className='flex gap-5 flex-wrap justify-center '>
        {bestensance.map((product, key) =>
          <ProductCart key={key} data={product} />
        )}
      </div>

      {isopen && (
         <div className='flex gap-5 flex-wrap justify-center '>
          {bestSellingProducts.map((product, key) =>
            <ProductCart key={key} data={product} />
          )}
        </div>
      )}

     

<div className=' flash-sale-text text-wishlist'>
        <div className='text-paragraph'><div className='empty-div-today'>
            <div className='empty'></div>
            <div id='today'> Just For You</div>
          </div></div>
        <div className='button-move-to-all'>
          <button onClick={newclicked}>
          View All
          </button>
        </div>
      </div>

      <div className='flex gap-5 flex-wrap justify-center '>
        {flashSaleProducts.map((product, key) =>
          <ProductCart key={key} data={product} />
        )}
      </div>

      {issopen && (
        <div className='flex gap-5 flex-wrap justify-center '>
          {newsale.map((product, key) =>
            <ProductCart key={key} data={product} />
          )}
        </div>
      )}

      <div className='footer-div'>
      <div className='above-button'>
        <button onClick={clickedd}><img src={abovebuttonimg} alt="" /></button>
      </div>
        <Footerfile />
      </div>
    </div>
  );
};

export default Wishlistt;
