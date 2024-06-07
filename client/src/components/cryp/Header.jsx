import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
                <section className='left-panel'>
                    <Link className='link' to="/">
                        <div className="logo">
                            <h1 className="logo-text">CRYPTONITE</h1>
                        </div>
                    </Link>
                </section>
                <section className="right-panel">
                    <Link target="_blank" to="/shop">
                        <button className="shop-button">Shop</button>
                    </Link>
                </section>
        </header>
    )
}

export default Header;