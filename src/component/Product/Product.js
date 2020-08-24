import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stoke } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-desciption">
                <h4 className="product-name">{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p>Only{stoke} left in stack - Order soon</p>
                <button 
                    className="main-button"
                    onClick={() => props.handleAddProduct(props.product)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />add to card
                </button>
            </div>

        </div>
    );
};

export default Product;