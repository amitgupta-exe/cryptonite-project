import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

import { useSelector, useDispatch } from "react-redux"



const ShopHeader = () => {

    const cart = useSelector((state) => state.cart.cart);

    const [toggleCart, setToggleCart] = useState(false);


    const toggleCartStyles = {
        transform: toggleCart ? "translateX(0)" : "translateX(100vw)",
        transition: "1s",
    }


    return (
        <header>
            <div className='header shop-header'>

                <section className='left-panel'>
                    <Link className='link' to="/shop">
                        <div className="logo">
                            <h1 className="logo-text">CRYP-MERCH</h1>
                        </div>
                    </Link>
                </section>

                <section className="right-panel">
                    <button onClick={() => setToggleCart(!toggleCart)} className="shop-button">Cart <h1>{cart.length}</h1></button>
                </section>


            </div>
            <div className='header-adjuster'></div>
            <div style={toggleCartStyles}>
                <Cart toggleCart={toggleCart} setToggleCart={setToggleCart} />
            </div>

        </header>
    )
}

export default ShopHeader;