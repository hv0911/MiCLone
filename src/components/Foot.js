import React from 'react';
import  '../Stylesheets/Foot.css';

const Foot = ({name,url}) => {
  return (
   <a className="anchor" href={url}>{name}</a>
  )
}

export default Foot;