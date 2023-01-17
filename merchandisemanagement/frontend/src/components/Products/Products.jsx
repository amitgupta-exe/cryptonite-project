import React from 'react';
import { useSelector } from 'react-redux';

import Product from './Product/Product';



const Products = ({ setCurrentId }) => {
    const products = useSelector((state) => state.products);

    products.reverse();


    return (
        !products.length ? <><h1>LOADING . . . . . . . </h1></> : (

            <main>

                <div className="container" style={{width: "70vw", display: "grid", gridTemplateColumns: "auto auto auto", gap: "2rem"}}>

                    {products.map((product, index) => (

                        <Product key={index} product={product} setCurrentId={setCurrentId} />
                    ))}
                </div>


            </main>
        )
    );
};

export default Products;
