import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg"; 

const Services = () => {
  return (
    <div>
      <Carousel
      infiniteLoop
      autoPlay
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      interval={3000}
      >
        <div>
          <img src={img1} alt="item1" />
          <p className='legend'>Full Stack</p>
        </div>

        <div>
          <img src={img2} alt="item3" />
          <p className='legend'>Peer-to-Peer Support</p>
        </div>

      </Carousel>
    </div>
  );
};

export default Services;