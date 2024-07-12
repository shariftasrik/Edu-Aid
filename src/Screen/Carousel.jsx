import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

/*carousel images */
import img1 from '../Assets/Images/Carousel/Ad_Phy.png';
import img2 from '../Assets/Images/Carousel/H_HM_1.png';
import img3 from '../Assets/Images/Carousel/S_Ch.png';
import img4 from '../Assets/Images/Carousel/H_ICT.png';

import '../css/Carousel.css';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src={img1} alt="Slide 1" />
        </div>
        <div>
          <img src={img2} alt="Slide 2" />
        </div>
        <div>
          <img src={img3} alt="Slide 3" />
        </div>
        <div>
          <img src={img4} alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;