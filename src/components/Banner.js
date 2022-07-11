import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap';


export const Banner = ({ end }) => {
    return (
        <Carousel>

            {end.map((item, index) => {
                return (
                    <Carousel.Item key={index} id='banner' interval={1000} keyboard={true}  >
            <img 
                  className="d-block w-100"
                  src={item.image}
                  alt="First slide"
            />

            <Carousel.Caption>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p>{item.source}</p>
                <u>Read more</u>
            </Carousel.Caption>
                    </Carousel.Item >
                )
            })}

        </Carousel>

    )
}

export default Banner;
