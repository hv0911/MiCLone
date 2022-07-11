import React from 'react';
import VideoCard from './VideoCard.js';
import '../Stylesheets/Videos.css'

const Videos = ({ videos }) => {
    // console.log(videos)
  return (
   <div className='videos'>
       {
          videos.map((item,index)=>{
              return(
                  <VideoCard key={index} image={item.image} name={item.name}/>
              )
          }) 
       }

   </div>
  )
}

export default Videos;