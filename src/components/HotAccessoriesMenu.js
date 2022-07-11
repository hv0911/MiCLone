import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheets/HotAccessoriesMenu.css';

const HotAccessoriesMenu = () => {
  return (
   <div className='hotAccessoriesMenu'> 
   <Link id='active' className='hotAccessoriesLink' to='/' >Music Store</Link>  {/* change */}
   <Link className='hotAccessoriesLink' to='/smartDevices' >Smart Devices</Link>
   <Link className='hotAccessoriesLink' to='/home' >Home</Link>
   <Link className='hotAccessoriesLink' to='/lifestyle' >Lifestyle & Fitness</Link>
   <Link className='hotAccessoriesLink' to='/mobileAccessories' >Mobile Accessories</Link>
   </div>
  )
}

export default HotAccessoriesMenu;