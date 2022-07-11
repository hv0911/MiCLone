import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Slider = ({ start }) => {
    return (

        <Carousel>
            {start.map((item, index) => {
                return (
                    <Carousel.Item>
                        <img
                           key={index}
                            className="d-block w-100"
                            src={item}
                            alt="First slide"
                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>

    )
};

export default Slider;