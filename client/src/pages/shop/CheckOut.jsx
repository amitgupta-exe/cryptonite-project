import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import CheckOutForm from '../../components/shop/CheckOutForm';
import ShopHeader from '../../components/shop/ShopHeader';

const CheckOut = () => {
    const cart = useSelector((state) => state.cart.cart);
    const cartTotal = useSelector((state) => state.cart.cartTotal);

    const [checkingOut, setCheckingOut] = useState(true);

    return (
        <>

            <ShopHeader />
            {/* {

                cart.length !== 0 ?
                    <div>
                        
                        <CheckOutForm checkingOut={checkingOut} setCheckingOut={setCheckingOut} cartTotal={cartTotal} cart={cart} />
                    </div>
                    :
                    <h1>
                        Cart is Empty
                    </h1>
            } */}

            <div className="form-container">

                <CheckOutForm checkingOut={checkingOut} setCheckingOut={setCheckingOut} cartTotal={cartTotal} cart={cart} />
            </div>

        </>
    )
}

export default CheckOut