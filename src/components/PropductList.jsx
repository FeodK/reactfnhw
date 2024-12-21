import React from 'react'
import ProductItem from './ProductItem';

const PropductList = ({ products }) => {
    return (
      <div className="goods__block">
        <ul className="goods__list">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    );
  };

export default PropductList