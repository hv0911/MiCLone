import React from 'react'
import HotCard from './HotCard.js'
import '../Stylesheets/HotAccessories.css'


const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifestyle,lifestyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
   <div className='HotAccessories'>
   <div className="CoverImage">
       <img src={musicCover || smartDeviceCover || homeCover || lifestyleCover ||mobileAccessoriesCover} alt="notfound" />
   </div>

    {/* -----for second div------- */}

    <div >
        { music &&
          music.map((item,index)=>{
              return(
                  <HotCard key={index} name={item.name} price={item.price} image={item.image} />
              )
          })
        }
        { smartDevice &&
            smartDevice.map((item,index)=>{
                return(
                    <HotCard key={index} name={item.name} price={item.price} image={item.image} />
 
                )
            })
        }
        { home &&
            home.map((item,index)=>{
                return(
                    <HotCard key={index} name={item.name} price={item.price} image={item.image} />
 
                )
            })
        }
        { lifestyle &&
            lifestyle.map((item,index)=>{
                return(
                    <HotCard key={index} name={item.name} price={item.price} image={item.image} />
 
                )
            })
        }
        { mobileAccessories &&
            mobileAccessories.map((item,index)=>{
                return(
                    <HotCard key={index} name={item.name} price={item.price} image={item.image} />
 
                )
            })
        }

        <HotCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
       
     
    </div>

   </div>
  )
}

export default HotAccessories