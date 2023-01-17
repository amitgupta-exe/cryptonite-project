import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteProduct } from '../../../actions/products';


const Product = ({ product, setCurrentId }) => {

    const dispatch = useDispatch();

    return (
        <main>
            
            <div className="card" style={{ width: "20vw", padding: "1rem" }}>

                <img className='card-img-top' src={product.image} alt="" />

                <h5 className='card-title'>{product.title}</h5>

                <p className='card-subtitle'>{product.price}</p>
                <p className='card-text'>{product.description}</p>

                <button className='btn btn-dark' onClick={() => setCurrentId(product._id)}>Edit</button>
                <button className='btn btn-danger' onClick={() => dispatch(deleteProduct(product._id))}> Delete</button>

            </div>

        </main>
    );
};

export default Product;
