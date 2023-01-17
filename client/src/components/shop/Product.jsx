import React from 'react';
import { useDispatch, useSelector } from "react-redux"

const Product = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  console.log(cart.length);

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }
  return (
    <div className='card'>
      <div className="card-image-container">
        <img className='card-image' src={product.image} alt="" />
      </div>
      <div className="line1">
        <h1 className='card-title'>{product.title}</h1>
        <h3 className='card-price'>{product.price}</h3>
      </div>
      <p className='card-description'>{product.description}</p>
      <button className='add-to-cart-btn' onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product