import React, {useState, useEffect} from 'react' 
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';
import './Checkout.css'
import './cartitem.css'


const Forcardcheckout = (props) => {
    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])
    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }));
    }
    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }));
    }
  return (
    <div>
      
        {/*  css present in checkout.css */}
    <div className='card-main-all'>
       <div className='img-and-name-for-check-out'>
        <div> <img src={detail.image} alt="" className='w-10'/></div>
      
       <div><h3>{detail.name}</h3></div>
       </div>
        <p>${detail.price * quantity}</p>
        
    </div>
    
    </div>
   
  )
}


export default Forcardcheckout
