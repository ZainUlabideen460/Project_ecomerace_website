import React, {useState, useEffect} from 'react' 
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';
import './Products.css'
const FavouriteItem = (props) => {
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

    return (
        <>
    <div className='flex justify-between items-center  text-black  p-2 border-b-2 gap-2 rounded-md'>
        <img src={detail.image} alt="" className='imgee'/>
        <h3>{detail.name}</h3>
        <p className='price'>${detail.price}</p>
        <span>{quantity}</span>
        <div className='w-20 flex justify-between gap-2'>
            <button className='bg-gray-200 rounded-full w-6 h-6 text-black ' onClick={handleMinusQuantity}>x</button>
        </div>
    </div>


    
    </>
  )
}

export default FavouriteItem