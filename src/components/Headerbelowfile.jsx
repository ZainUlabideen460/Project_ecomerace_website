import React from 'react'
import './Mainfile.css'
import './Herosection.css';
import img1 from './imges/hero.png';
import apple from './imges/apple.png';
import left from './imges/aroz.png';
import spi from './imges/spi.png';



const Headerbelowfile = () => {
    
    return (
      <div>
        <div className='flex justify-center gap-10  flex-wrap pl-10 pr-6 mb-20 mt-5'>
         {/* spinner-and-fashion-div */}
         <div className='manes-fashion'>
           <div className='manes-fashion-select'>
             <select name="" id="select1">
               <option value="">Womans Fashion</option>
             </select>
             <select className='men-div pt-2' name="" id="select2">
               <option className='' value="">Men’s  Fasshions</option>
             </select>
           </div>
           <p className='para-elec'>Electronics</p>
           <p className='para-elec'>Medicine</p>
           <p className='para-elec'>Sports & Outdoor</p>
           <p className='para-elec'>Baby’s & Toys</p>
           <p className='para-elec'> Health & Beauty</p>
         </div> 
         <div >
          <hr className='line-spinner' />
         </div>

         <div className='flex justify-center flex-wrap gap-0 main-spinner'>
          <div className='pt-10  text-div-main'>
<div className='flex  gap-7 pt-10'>
  <img src={apple} alt="" />
  <p>iPhone 14 Series</p>
</div>
<div className='up-to-text'>
Up to 10% off Voucher
</div>
<div className='flex gap-4'>
  <button>Shop Now  </button>
  <img className='pt-2' src={left} alt="" />
</div>
          </div>
          <div className='pt-5 img-lg'>
<img src={img1} alt="" />
          </div>
          <div className='pb-10'>
            <img src={spi} alt="" />
          </div>
         </div>
      
  
       </div>
        
      </div>
    )
  }
export default Headerbelowfile
