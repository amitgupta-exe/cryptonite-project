import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
const CartItem = ({ item }) => {



    const dispatch = useDispatch();

    const deleteFromCart = () => {
        dispatch({ type: "DELETE_FROM_CART", payload: item });
    }

    const addToCart = () => {
        dispatch({ type: "ADD_TO_CART", payload: item });

    }

    return (
        <div className='cart-item'>
            <div className='cart-image-container'>
                <img className='cart-image' src={item.image} alt="" />
            </div>
            <div className='details' >
                <h1 className='card-title'>{item.title}</h1>
                <div className="df pricing">
                    <p className='card-description'>{item.price}</p>
                    <p><CloseIcon/></p>
                    <div className='df'>
                        <p className='card-description'>{item.inCartQuantity}</p>
                        <div className='dfc'>
                            <ArrowDropUpIcon onClick={addToCart} />
                            <ArrowDropDownIcon onClick={deleteFromCart}  />
                        </div>
                    </div>
                    <p></p>
                    <p className=''>{eval(item.price * item.inCartQuantity)}</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem;