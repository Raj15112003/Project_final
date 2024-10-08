import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [showReview, setShowReview] = useState(false);
    const [rating, setRating] = useState(0);

    const toggleReview = () => {
        setShowReview(!showReview);
    };

    const handleRating = (value) => {
        setRating(value);
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                {showReview ? (
                    <div className="productdisplay-right-star">
                        {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;
                            return (
                                <img
                                    src={ratingValue <= rating ? star_icon : star_dull_icon}
                                    alt=""
                                    key={index}
                                    onClick={() => handleRating(ratingValue)}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <button onClick={toggleReview}>Review</button>
                )}
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                    <div className="productdisplay-right-price-new">₹{product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and shot sleeves, worn as an undershirt or outer garment
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <select name="" id="" className='productdisplay-right-sizes'>
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XL</option>
                        <option value="">XXL</option>
                    </select>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
