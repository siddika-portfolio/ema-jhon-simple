import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = (props) => {
    const {productKey} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch('https://thawing-thicket-30623.herokuapp.com/products/'+ productKey)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [productKey])
    
    return (
        <div>
            <h2>Your product details </h2>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;