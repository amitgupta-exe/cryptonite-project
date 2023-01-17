import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Links from '../../components/cryp/Links';


const Header = () => {

    const [showLinksDropDown, setShowLinksDropDown] = useState(false);

    const dropDownVisibility = {
        display: showLinksDropDown ? "block" : "none",
    }

    return (
        <header>
            <div className='header'>
                <section className='left-panel'>
                    <Link className='link' to="/">
                        <div className="logo">
                            <h1 className="logo-text">CRYPTONITE</h1>
                        </div>
                    </Link>
                </section>
                <section className="middle-panel">
                    <div className="search" >
                        <div className='links-dropdown-button' onClick={() => { setShowLinksDropDown(!showLinksDropDown) }} onMouseEnter={() => { setShowLinksDropDown(true) }} onMouseLeave={() => { setShowLinksDropDown(false) }}>
                            <h3>Crypt-Did</h3>
                        </div>
                    </div>

                    <div className='links-dropdown-body' style={dropDownVisibility} onMouseEnter={() => { setShowLinksDropDown(true) }} onMouseLeave={() => { setShowLinksDropDown(false) }}>
                        <Links setShowLinksDropDown={setShowLinksDropDown} />
                    </div>
                </section>
                <section className="right-panel">
                    <Link target="_blank" to="/shop">
                        <button className="shop-button">Shop</button>
                    </Link>
                </section>
            </div>
            <div className='header-adjuster'></div>
        </header>
    )
}

export default Header;