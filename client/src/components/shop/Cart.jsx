import React from 'react'
import { useSelector } from "react-redux"
import CartItem from './CartItem';
import CloseIcon from '@mui/icons-material/Close';

import { Link } from 'react-router-dom';

const Cart = ({ toggleCart, setToggleCart }) => {

  const cart = useSelector((state) => state.cart.cart);
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  return (
    <main>


      <div className='cart'>
        <CloseIcon className='close-cart' onClick={() => setToggleCart(!toggleCart)} />
        {
          cart.length === 0 ? <> Cart is Empty</> :
            <div>
              <div className='cart-items'>

                {cart.map((item, index) => {
                  return <CartItem key={index} item={item} />
                })}

              </div>

              <div className="checkout">
                <div className='checkout-total' >
                  <h3>TOTAL:</h3>
                  <p>{cartTotal}</p>
                </div>
                <div className='checkout-btn'>
                  <Link to="/shop/checkout">
                    <button className='red-btn'>Check Out</button>
                  </Link>
                </div>
              </div>
            </div>
        }

      </div>
    </main>
  )
}

export default Cart