import React from 'react'
import '../Stylesheets/hotcard.css';

const HotCard = ({name,price,image},) => {
  return (
    <div className='HotItemCard'>
        <img src={image} alt="not found" />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotCard;