import React from 'react';

import ShopHeader from '../../components/shop/ShopHeader'
import Products from '../../components/shop/Products';

const Shop = () => {


  return (
    <main className='shop'>
      <ShopHeader />
      <Products />
    </main>
  )
}

export default Shop