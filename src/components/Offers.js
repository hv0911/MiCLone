import React from 'react';
import Offer from './Offer.js'
import '../Stylesheets/offers.css';

const Offers = ( {offer} ) => {

  return (
      <div className='offerZone'>
       {offer.map((item,index)=>{
           return(
               <Offer key={index} index={index} src={item.image} link={item.url} />
           )
       })}
      </div>

  )
};

export default Offers;