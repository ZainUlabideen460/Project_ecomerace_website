import React from 'react';
import './Flashsaling.css';
import './Productcard.css';

import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import { removeFromFavorites, addToFavorites } from '../stores/cart';

const ProductCart = (props) => {
    const favorites = useSelector((state) => state.cart.favorites);
    const dispatch = useDispatch();

    const {
        id,
        image,
        name,
        price,
        cardoldprice,
        cardoffer,
        cardstart,
        cardno,
        heartimg,
        viewimg,
        slug
    } = props.data;
   
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    };

    const isFavorite = favorites.includes(id);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites({ productId: id }));
        } else {
            dispatch(addToFavorites({ productId: id }));
        }
    };

    return (
        <div className="product-list">
            <div className="main-card-div relative">
                <div className="img-div relative group">
                    <div className="absolute inset-0 bg-black bg-opacity-100 flex flex-col items-center text-color-white-100 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer add-to-card-div">
                        <button className='w-20 p-2 rounded-md text-sm hover:bg-gray-700 flex gap-2 button-add-to-card' onClick={handleAddToCart}>
                            <img src={iconCart} alt="" className='w-5' />
                            Add To Cart
                        </button>
                    </div>
                    <div className='offer absolute to-10'>
                        <p className=''>{cardoffer}</p>
                    </div>
                    <div className='heart-view-div-icon'>
                        <div className='flex' onClick={handleToggleFavorite} id='heartingimg'>
                            <img src={heartimg} alt="" className={isFavorite ? 'favorite' : ''} />
                        </div>
                        <div id='viewingimg'>
                            <img src={viewimg} alt="" />
                        </div>
                    </div>
                    <Link to={`/product/${slug}`}>
                        <img id='img-main-card-remort' src={image} alt='' />
                    </Link>
                </div>
                <div className='card-text-data'>
                    <h5>{name}</h5>
                    <div className='product-price'>
                        <p id='pragraphe-newprice'>{price}</p>
                        <p id='pragraphe-oldprice'>{cardoldprice}</p>
                    </div>
                    <div className='start-cardno'>
                        <div className='img-start-div'>
                            {[...Array(5)].map((_, i) => (
                                <img key={i} src={cardstart} alt="" />
                            ))}
                        </div>
                        <p id='cardno'>{cardno}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCart;
