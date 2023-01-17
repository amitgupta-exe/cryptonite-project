import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Products from './components/Products/Products';
import Form from './components/Form/Form';
import { getProducts } from './actions/products';

import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react'

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProducts());
  }, [currentId, dispatch]);

  return (
    <main>
      <div className="d-flex flex-row">
      <Products className="d-grid" setCurrentId={setCurrentId} />
      <Form className="" currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </main>
  )
}

export default App