import React from 'react'
import './Ensance.css'
import radioimf from './imges/radio.png'

import './Flashsaling.css'
import Timeforensance from './Timeforensance'
function Ensancecatogry() {
 
  return (
    <div>
    <div className='flex justify-center'>
      <div className='enhance-div-main flex gap-2 flex-wrap justify-center'>

<div className='catogry-ensance'>
        <div className='catogry-text-cat' >
<p>Categories</p>
        </div>
        <div className='ensance-text'>
<h5>Enhance Your Music Experience</h5>
        </div>
        <div>
          <Timeforensance targetDate="2024-08-01T00:00:00"/>
        </div>
      
        <div className='buy-now-button'>
          <button>
            Buy Now
          </button>
        </div>

      </div>
      <div className='img-ensance'>
        <img src={radioimf} alt=""  />
      </div>
      </div>
      </div>









</div>
   
  )
}

export default Ensancecatogry
