import React from 'react'
import './Flashsaling.css'
import rightimg from './imges/right.png'
import leftimg from './imges/left.png'
import camraimf from './imges/camra.png'
import mobileimg from './imges/mobile.png'
import watchimg from './imges/watch.png'
import computerimg from './imges/cmputer.png'
import gameimg from './imges/game.png'
import headphoneimg from './imges/Headphone.png'
function FlashSaleing() {
    
     const catogry=[
        {
            imgcatogry:mobileimg,
            catogrydis:"Phone"
        },
        {
            imgcatogry:computerimg,
            catogrydis:"Computer"
        },
        {
            imgcatogry:watchimg,
            catogrydis:"watch"
        },
        {
            imgcatogry:camraimf,
            catogrydis:"Camra"
        },
        {
            imgcatogry:headphoneimg,
            catogrydis:"Headphone"
        },
        {
            imgcatogry:gameimg,
            catogrydis:"Game"
        }

     ]
  return (
    <div>
     

<div className='flex justify-between flex-wrap  mt-10 mb-10 catogry-main-empty'>
            <div>
            <div className='empty-div-today'>
            <div className='empty'></div>
            <div id='today'>Categories</div>
          </div>
            <div className='flash-sale-text-paragraph '><p>Browse By Category </p></div>
            </div>
     
            <div className='flex justify-center flex-wrap gap-3 lefft-button-right'>
              <div className='left-image-div' ><img src={leftimg} alt="hello" /></div>
              <div className='left-image-div'><img src={rightimg} alt="hello"/></div>

            </div>
      </div>


<div className='catogry-main-div-card'>{
catogry.map(cat =>(
<div className='card-catogry'>
    <div><img src={cat.imgcatogry} alt="" /></div>
    <div>  <p>{cat.catogrydis}</p></div>
  
</div>

))}
</div>


    </div>
  )
}


export default FlashSaleing
