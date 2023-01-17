import React from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from "react-router-dom"

import { createorder } from '../../store/actions/orders';

const CheckOutForm = ({ cart, cartTotal, checkingOut, setCheckingOut }) => {

    const dispatch = useDispatch();

    const billingName = useRef("");
    const email = useRef("");
    const mobileNo = useRef("");
    const address = useRef("");



    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            products: cart,
            billingName: billingName.current.value,
            email: email.current.value,
            mobileNo: mobileNo.current.value,
            address: address.current.value,
            orderAmount: cartTotal
        }
        // console.log(order);
        dispatch(createorder(order));
        setCheckingOut(false);
    }

    return (
        !checkingOut ? <>Your Order has been placed, Thank you for shopping with us
            <Link to="/shop">
                <button>Continue Shoping</button>
            </Link>
        </> :
            <div>
                <form className='checkout-form' action="">
                    <div>
                        <p>Order Total : {cartTotal}</p>
                    </div>
                    <div className="inputs">
                        <input ref={billingName} className='name form-control' type="text" name="" id="" placeholder='Enter Billing Name' required />

                        <input ref={mobileNo} className="mobile" type="text" placeholder='Enter Mobile No.' required />

                        <input ref={email} type="email" className="email" placeholder="Enter Email" required />

                        <input ref={address} type="text" className='address'  placeholder='Enter Shipping Address' required />
                    </div>
                    <div className="place-order">
                        <button className='place-order-btn red-btn' onClick={handleSubmit}>Place Order</button>
                    </div>
                </form>
            </div>
    )
}

export default CheckOutForm