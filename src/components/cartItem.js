import React, { useState, useEffect } from 'react';
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';
import './cartitem.css';

const CartItem = (props) => {
    const { productId, quantity } = props.data;
    const [detail, setDetail] = useState({});
    const dispatch = useDispatch();
    
    useEffect(() => {
        const findDetail = products.find(product => product.id === productId);
        setDetail(findDetail);
    }, [productId]);

    const handleMinusQuantity = () => {
        if (quantity > 0) {
            dispatch(changeQuantity({
                productId: productId,
                quantity: quantity - 1
            }));
        }
    };

    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }));
    };

    return (
        <div className='card-main-div-item'>
            <div className='img-and-name'>
                <div><img src={detail.image} alt={detail.name} className='w-10' /></div>
                <div><h3>{detail.name}</h3></div>
            </div>
            <div><p>${detail.price}</p></div>
            <div className='main-div-button-quanitys'>
                <div className='quantity-div-n'><p>{quantity}</p></div>
                <div className='neg-plus-div'>
                    <div className='plus-div'><button onClick={handlePlusQuantity}>^</button></div>
                    <div className='neg-div'><button id='negtive-button' onClick={handleMinusQuantity}>^</button></div>
                </div>
            </div>
            <p id='pri'>${detail.price * quantity}</p>
        </div>
    );
};

export default CartItem;
