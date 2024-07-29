import React, { useEffect, useState} from 'react' 
import { useParams } from 'react-router-dom' 
import ProductCart from '../components/productCart'
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import heart from '../components/imges/heart.png'
import './detaile.css'
import circleimg from '../components/imges/circle.png'
import track from '../components/imges/track1.png'
import Footerfile from  '../components/Footerfile'
import '../components/Flashsaling.css'





const Detail = () => {
    const { slug } = useParams();
    const [detail, setDetail] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = products.filter(product => product.slug === slug);
        if(findDetail.length > 0){
            setDetail(findDetail[0]);
        }else{
            window.location.href = '/';
        }
    }, [slug])
    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    }
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: detail.id,
            quantity: quantity
        }));
    }
    useEffect(()=>{
        window.scrollTo({
          top:0,
          left:0,
          behavior:'smooth'
        })
      },[])
    const flashSaleProducts = products.slice(0, 4);
  return (

    <div>
        
        <h2 className='text-3xl text-center'>PRODUCT DETAIL</h2>
        <div className='flex flex-wrap gap-10 mt-10'>
           {/* main-div-ditaile */}
            <div className='main-small'>
                <div className='smallimg'> <img src={detail.image} alt="" /></div>
                <div className='smallimg'> <img src={detail.image} alt="" /></div>
                <div className='smallimg'> <img src={detail.image} alt="" /></div>
                <div className='smallimg'> <img src={detail.image} alt="" /></div>
         
            </div>
            <div className='larg-img'>
                <img src={detail.image} alt="" />
            </div>
            <div className='main-detaile-div-text'>
            <div className='flex flex-col gap-5 text-dit'>
                <h1 className='text-3xl font-bold'>{detail.name}</h1>
                <p className='text-3xl'>
                    {detail.price}
                </p>
                <p id='discr'>
                    {detail.description}
                </p>
                
                <div className='line'></div>
                <div className='main-color-div'>
                     <span><p>color :</p>
                        <div className='color-circle'></div>
                    <div className='color-circlee'></div>
                    </span>
                </div>
                
                <div className='size-main-div'>
                    <p>Size:</p>
                    <div className='size'>XS</div>
                    <div className='size'>S</div>
                    <div className='size'>M</div>
                    <div className='size'>L</div>
                    <div className='size'>XL</div>

                </div>
                <div className='flex gap-5 cl-heart-qun'>
                    <div className='main-div-button-quantity'>
                        <div className='pluse'> <button className='' onClick={handleMinusQuantity}>-</button></div>
                        <div className='quantity-div'> {quantity}</div>
                        <div className='pluse'>   <button className='' onClick={handlePlusQuantity}>+</button></div>
                       
                   
                     
                    </div>
                    <button className='btn-buy' onClick={handleAddToCart}>
                        Add To Cart
                    </button>
                    <div className='img-heart'>
                      <img src={heart} alt="hello"/>
                    </div>
                </div>
                <div className='main-div-car-and-circle'>
                    <div className='img-car-text'>
                        <div className='img-car'>
                            <img src={track} alt="hello"/>
                        </div>
                        <div className='text-car'>
                            <h3>Free Delivery</h3>
                            <p>Enter your postal code for Delivery Availability</p>
                        </div>
                    </div>
                    <div className='img-car-text'>
                        <div className='img-car'>
                            <img src={circleimg} alt="hello"/>
                        </div>
                        <div className='text-car'>
                            <h3>Return Delivery</h3>
                            <p>Free 30 Days Delivery Returns. Details</p>
                        </div>
                    </div>


                </div>
               
            </div>
        </div>
        </div>
       
      
      
<div className=' flash-sale-text text-wishlist'>
        <div className='text-paragraph'><div className='empty-div-today'>
            <div className='empty'></div>
            <div id='today'> Related Item</div>
          </div></div>
      </div>

     {/* cards flash sale  */}
   <div className='flex gap-5 flex-wrap justify-center '>
        {flashSaleProducts.map((product, key) =>
          <ProductCart key={key} data={product} />
        )}
      </div>

        <Footerfile/>
    </div>
  )
}

export default Detail