import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart,setCart] = useState([]);
    useEffect(()=>{
       const saveCart = getDatabaseCart();
       const productKeys = Object.keys(saveCart);
       const cartProducts = productKeys.map(key=>{
           const product = fakeData.find(pd=>pd.key=== key);
           product.quantity = saveCart[key];
           return product;
       })
       setCart(cartProducts);

    },[])
    const removeProduct = (productKey)=>{
        console.log("Remove Product",productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);

    }
    return (
        <div>
            {/* <h1>This is Review {cart.length}</h1> */}
            {
                cart.map(product =><ReviewItem product={product} removeProduct={removeProduct} key={product.key}></ReviewItem>)
            }
        </div>
    );
};

export default Review;