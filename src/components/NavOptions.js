import React, { useState,useEffect } from 'react'
import NavCard from './NavCard';
import '../Stylesheets/NavOptions.css'

const NavOptions = ({ miPhones, redmiPhones, tv, home, fitnessAndLifeStyle, laptops, accessories, audio }) => {

    const [miPhonesToggle,setMiPhonesToggle] = useState(false);
    const [redmiPhonesToggle,setredmiPhonesToggle] = useState(false);
    const [tvToggle,setTvToggle] = useState(false);
    const [homeToggle,setHomeToggle] = useState(false);
    const [fitnessAndLifeStyleToggle,setFitnessAndLifeStyleToggle] = useState(false);
    const [laptopsToggle,setLaptopsToggle] = useState(false);
    const [accessoriesToggle,setAccessoriesToggle] = useState(false);
    const [audioToggle,setAudioToggle] = useState(false);

    useEffect(() => {
     if(window.location.pathname==="/miphones"){
       return setMiPhonesToggle(true);
     }
     if(window.location.pathname==="/redmiphones"){
       return setredmiPhonesToggle(true);
     }
     if(window.location.pathname==="/tv"){
       return setTvToggle(true);
     }
     if(window.location.pathname==="/laptop"){
       return setLaptopsToggle(true);
     }
     if(window.location.pathname==="/lifestyle"){
       return setFitnessAndLifeStyleToggle(true);
     }
     if(window.location.pathname==="/home"){
       return setHomeToggle(true);
     }
    
     if(window.location.pathname==="/audio"){
       return setAudioToggle(true);
     }
     if(window.location.pathname==="/accessories"){
       return setAccessoriesToggle(true);
     }
    }, [])
    

    return (
        <div className='navOptions'>
       
            {
                miPhonesToggle ? miPhones.map((item,index)=>(
                    <NavCard key={index} name = {item.name} price = {item.price} image = {item.image} />
                ))
                :null
            
            }
            
            {
          
                redmiPhonesToggle ? redmiPhones.map((item,index)=>(
                    <NavCard key={index} name = {item.name} price = {item.price} image = {item.image} />
                ))
                :null
            
            }

            {
          
                tvToggle ? tv.map((item,index)=>(
                    <NavCard key={index} name = {item.name} price = {item.price} image = {item.image} />
                ))
                :null
            
            }

            {
          
                homeToggle ? home.map((item,index)=>(
                    <NavCard key={index} name = {item.name} price = {item.price} image = {item.image} />
                ))
                :null
            
            }

            {
          
                fitnessAndLifeStyleToggle ? fitnessAndLifeStyle.map((item,index)=>(
                    <NavCard key={index} name = {item.name} price = {item.price} image = {item.image} />
                ))
                :null
            
            }

            {
          
                laptopsToggle ? laptops.map((item,index)=>(
                    <NavCard key={index} name = {item.name} price = {item.price} image = {item.image} />
                ))
                :null
            
            }

            {
          
                accessoriesToggle ? accessories.map((item,index)=>(
                    <NavCard key={index} name = {item.name} price = {item.price} image = {item.image} />
                ))
                :null
            
            }

            {
          
                audioToggle ? audio.map((item,index)=>(
                    <NavCard key={index} name = {item.name} price = {item.price} image = {item.image} />
                ))
                :null
            
            }
          
          </div>
    )
}

export default NavOptions