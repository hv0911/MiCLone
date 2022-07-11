import React from 'react'

const Offer = ({ index,src,link }) => {
  return (
  <a href={link}> <img src={src} alt={`${index} `} /></a>
  )
};

export default Offer;