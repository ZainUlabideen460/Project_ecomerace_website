import React from 'react'
import  './Footerandabove.css'
import  track  from './imges/track.png'
import hendfree from './imges/Services.png'
import service from './imges/Services.png'

import abovebuttonimg from './imges/Fill with Up Arrow.png'
function Footerandabove() {
  const clicked=()=>{
    
      window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
      })
  }
    const servicecard=[
        {
        imgcard:track,
        cardtitle:"FREE AND FAST DELIVERY",
        carddis:"Free delivery for all orders over $140",
    },
    {
        imgcard:hendfree,
        cardtitle:"24/7 CUSTOMER SERVICE",
        carddis:"Friendly 24/7 customer support",
    },
    {
        imgcard:service,
        cardtitle:"MONEY BACK GUARANTEE",
        carddis:"We reurn money within 30 days",
    },



]
  return (
    <div>
        
      <div className='card-delivry-map-div flex flex-wrap justify-center'>
        {
      servicecard.map(product=>(
<div className='card-delivry'>
    <div>
<img src={product.imgcard} alt="" />
    </div>
    <div>
<h2>{product.cardtitle}</h2>
<p>{product.carddis}</p>
    </div>
</div>

      ))
        }
      </div>
      <div className='above-button'>
        <button onClick={clicked}><img src={abovebuttonimg} alt="" /></button>
      </div>
     
    </div>
  )
}

export default Footerandabove