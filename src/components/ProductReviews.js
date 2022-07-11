import React from 'react'
import Product from './Product.js'
import '../Stylesheets/ProductReviews.css';

const ProductReviews = ({ProductReviews}) => {
  return (
    <div className='productReviews'>
        {ProductReviews.map((item,index)=>{
              return(
                  <Product key={index} image={item.image} price={item.price} name={item.name} review={item.review}/>
              )
        })}
    </div>
  )
};

export default ProductReviews;
