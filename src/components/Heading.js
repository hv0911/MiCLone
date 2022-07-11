import React from 'react';
import '../Stylesheets/Heading.css'

const Heading = ({text}) => {
  return (
      <section className='heading'>
       <div className='line'></div>
       <div className='text'>{text}</div>
       <div className='line'></div>
      </section>
  
  )
}

export default Heading;