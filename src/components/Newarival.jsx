import React from 'react'
import './Newarival.css'
import witespacker from './imges/witespacker.png'
import mp3 from './imges/amp3.png'
import woman from './imges/woman.png'
import perfum from './imges/perfum.png'

const Newarival = () => {
  return (
    <div>
      <div className='flex justify-between flex-wrap  mt-10 mb-10 catogry-main-empty'>
            <div>
            <div className='empty-div-today'>
            <div className='empty'></div>
            <div id='today'> Featured</div>
          </div>
            <div className='flash-sale-text-paragraph '><p>New Arriva</p></div>
            </div>
      </div>
      {/* feature and new arival section */}
      <div className='new-arival-img-div'>
        <div className='new-arival-img-left-large'>
          <div className='playstatim-text first-img-text'>
            <h2>PlayStation 5</h2>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <button>Shop Now</button>
          </div>
          <img src={witespacker} alt="PlayStation 5" />
        </div>
        <div className='new-arival-img-right'>
          <div className='new-arival-img-right-up'>
          <div className='playstatim-text  img-right-up-text'>
            <h2>Women’s Collections</h2>
            <p>Featured woman collections that give you another vibe..</p>
            <button>Shop Now</button>
          </div>
           
            <img src={woman} alt="Woman" />
          </div>
          <div className='new-arival-img-right-bottom'>
            <div className='new-arival-img-right-bottom-left'>
            <div className='playstatim-text  img-right-botttom-text'>
            <h2>Speakers</h2>
            <p>Amazon wireless speakers</p>
            <button>Shop Now</button>
            
          </div>
              <img src={mp3} alt="MP3" />
            </div>
            <div className='new-arival-img-right-bottom-right'>
            <div className='playstatim-text  img-right-botttom-text-div'>
            <h2>Perfume</h2>
            <p>GUCCI INTENSE OUD EDP</p>
            <button>Shop Now</button>
            
          </div>
              <img src={perfum} alt="Perfume" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newarival
