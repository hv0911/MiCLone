import React from 'react'
import '../Stylesheets/Product.css';

const Product = ({ image, name, price, review }) => {
  return (
    <div className='product'>
      <div>
        <img src={image} alt="notfound" />
      </div>
      <div className='review'>
        <p>{review}</p>
      </div>
      <div>
        <p>{name}</p>
        <span>{price}</span>
      </div>

    </div>
  )
};

export default Product;