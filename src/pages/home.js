import React from 'react'
import { products } from '../products'


import ProductCart from '../components/productCart'
import FlashSaleing from '../components/FlashSaleing'
import rightimg from '../components/imges/right.png'
import leftimg from '../components/imges/left.png'
import '../components/Flashsaling.css'
import '../components/Ensance.css'
import Ensancecatogry from '../components/Ensancecatogry'
import Footerandabove from '../components/Footerandabove'
import Footerfile from '../components/Footerfile'
import Headerbelowfile from '../components/Headerbelowfile'
import { Link } from 'react-router-dom'
import Newarival from '../components/Newarival'
import CountdownTimer from '../components/CountdownTimer'
const Home = () => {
  const flashSaleProducts = products.slice(0, 4); // First four products
  const bestSellingProducts = products.slice(4, 8);
  const bestensance = products.slice(8, 16);
  return (
    <div>


      <Headerbelowfile />
      



          
 <div className='flex justify-around flex-wrap mb-10  main-empty-class-text'>
            <div>
            <div className='pl-10 empty-div-today'>
            <div className='empty'></div>
            <div id='today'>Today's</div>
          </div>
            <div className=' pl-10 flash-sale-text-paragraph '><p>Flash Sales </p></div>
            </div>
         <div className=''>
            <CountdownTimer targetDate="2024-08-01T00:00:00" /></div> 
            <div className='flex justify-center flex-wrap gap-3 pr-10 lefft-button-right'>
              <div className='left-image-div' ><img src={leftimg} alt="hello"/></div>
              <div className='left-image-div'><img src={rightimg} alt="hello"/></div>

            </div>
      </div> 
      


      {/* cards flash sale  */}
      <div className=' flex gap-4 flex-wrap justify-center'>
         <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'> 
        {flashSaleProducts.map((product, key) =>
          <ProductCart key={key} data={product} />
        )} 
       </div> 
      </div>
      <div className='flex justify-center flex-wrap '>
        <Link to='/wishlistt'>
          <button className='pb-4 view-all-button-div '>
            View All Products
          </button>
        </Link>

      </div>
      <div >
      <hr className='mt-20 mb-20' id='zzz'/>
      </div>
      
      <FlashSaleing /> 

      <div >
      <hr className='mt-20 mb-20' id='zzz'/>
      </div>
      
<div className='flex justify-between flex-wrap  mt-20 mb-10 catogry-main-empty'>
            <div>
            <div className='empty-div-today'>
            <div className='empty'></div>
            <div id='today'> This Month</div>
          </div>
            <div className='flash-sale-text-paragraph '><p>Best selling Product</p></div>
            </div>
            <div className='flex justify-center flex-wrap '>
        <Link to='/wishlistt'>
          <button className='pb-4 view-all-button-div '>
            View All Products
          </button>
        </Link>

      </div>
         
      </div>

      <div className='flex gap-5 flex-wrap justify-center '>
        {bestSellingProducts.map((product, key) =>
          <ProductCart key={key} data={product} />

        )}
      </div>  


       <Ensancecatogry /> 


       <div className='flex justify-between flex-wrap  mt-20 mb-10 catogry-main-empty new-div'>
            <div>
            <div className='empty-div-today'>
            <div className='empty'></div>
            <div id='today'> Our Products</div>
          </div>
            <div className='flash-sale-text-paragraph '><p>Explore Our Products</p></div>
            </div>
         
            <div className='flex justify-center flex-wrap gap-3 pr-10 lefft-button-right'>
              <div className='left-image-div' ><img src={leftimg} alt="hello"/></div>
              <div className='left-image-div'><img src={rightimg} alt="hello"/></div>

            </div>
      </div>
      <div className='flex gap-5 flex-wrap justify-center explor-map-div'>
        {bestensance.map((product, key) =>
          <ProductCart key={key} data={product} />

        )}
      </div> 
       <div className='flex justify-center flex-wrap '>
        <Link to='/wishlistt'>
          <button className='pb-4 view-all-button-div '>
            View All Products
          </button>
        </Link>

      </div>
       <Newarival />
       <Footerandabove /> 

      <Footerfile />   

    </div>
  )
}

export default Home