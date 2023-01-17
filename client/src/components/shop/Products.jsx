import React from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

import "../../styles/styles.css"

import Product from './Product';

const Products = () => {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:9001/products")
    await setProducts(response.data)
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <main>
      <div className="products-container">
        <div className="products-grid">
          {products.map((product, index) => {
            return <Product product={product} key={index} />
          })}
        </div>
      </div>
    </main>

  )
}

export default Products