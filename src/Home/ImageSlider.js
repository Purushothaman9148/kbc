// import React from "react";
// import { useState } from "react";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Bannergroup from '../Assets/images/Bannergroup.JPG'
// import Bannergroup1 from '../Assets/images/Bannergroup1.JPG'
// export default function ImageSlider() {
//     const sliderImages = [
//         {
//             url: Bannergroup,
//         },
//         {
//             url: Bannergroup1,
//         }
//     ];
//     const [activeImageNum, setCurrent] = useState(0);
//     const length = sliderImages.length;
//     const nextSlide = () => {
//         setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
//     };
//     const prevSlide = () => {
//         setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
//     };
//     if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
//         return null;
//     }
//     return (
//         <div>
//             <section className="image-slider">
//                 <div className="left">
//                     <ArrowBackIosIcon onClick={prevSlide} />
//                 </div>
//                 <div className="right">
//                     <ArrowForwardIosIcon onClick={nextSlide} />
//                 </div>
//                 {sliderImages.map((x, ind) => {
//                     return (
//                         <div
//                             className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
//                             key={ind}
//                         >
//                             {ind === activeImageNum && <img src={x.url} className="image" />}
//                         </div>
//                     );
//                 })}
//             </section>
//         </div>
//     );
// }

import Carousel from 'react-bootstrap/Carousel';
import Bannergroup from '../Assets/images/Bannergroup.JPG'
import Banner_2 from '../Assets/images/Banner_2.jpg'
import Banner3 from '../Assets/images/Banner3.JPG'
import CollegeBanner1 from '../Assets/images/CollegeBanner1.JPG'
import CollegeBanner2 from '../Assets/images/CollegeBanner2.JPG'

function ImageSlider() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CollegeBanner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='imageSliderText'>
                        <h4>Make Disciples</h4>
                        <p>KBC has played a vital role in the evangelization of our nation.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CollegeBanner2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <div className='imageSliderText'>
                        {/* <h5>Second slide label</h5> */}
                        <p>We Develop the future Christian leaders.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <div className='imageSliderText'>
                        {/* <h5>Third slide label</h5> */}
                        <p>
                            God uses men who are weak and feeble enough to lean on Him.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageSlider;