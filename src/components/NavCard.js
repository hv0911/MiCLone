import React from 'react'
import '../Stylesheets/NavCard.css'


const NavCard = ({ name, price, image }) => {
    return (
        <div className='navCard'>

           <img src={image} alt={name}   />
            
            <p>{name}</p>

            <span>{price}</span>




        </div>
    )
}

export default NavCard