import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Images = [
  {
    id: 1,
    src: "https://i.pinimg.com/564x/af/38/43/af384317bd0ef4620c798e3cf107d176.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/564x/6c/6e/83/6c6e83c2bde788121bcb8f5afd57c8b1.jpg",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/564x/22/91/59/2291594acd064b61c99ef1038a78f4ed.jpg",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://i.pinimg.com/564x/90/65/7f/90657f7216eaed92319d361fe1a75eca.jpg",
    alt: "Image 4",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/564x/7d/0e/42/7d0e4277ec763d26ac6026b3b24d4970.jpg",
    alt: "Image 5",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/564x/e8/a6/29/e8a6295025285f37aeb1a9ecbd9c642f.jpg",
    alt: "Image 6",
  },
];

const ChooseCarousel = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const settings = {
    speed:500,
    infinite: true,
    centerPadding: "0",
    centerMode: true,
    slidesToShow: 4, // Display 3 images at a time
    slidesToScroll: 1,
    lazyLoad: true,
    asNavFor: nav2,
    focusOnSelect: true,
  };

  const thumbnailSettings = {
    slidesToShow: Images.length, // Display all thumbnails
    slidesToScroll: 1,
    asNavFor: nav1,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div>
      <div className="content">
        <h2 className="header">Car Gallery</h2>
        <div className="container">
          <Slider {...settings} ref={(slider) => setSlider1(slider)}>
            {Images.map((item) => (
              <div key={item.id}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="img"
                  width="200"
                  height="150"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="thumbnail-wrapper">
        <Slider {...thumbnailSettings} ref={(slider) => setSlider2(slider)}>
          {Images.map((item) => (
            <div key={item.id}>
              <img
                src={item.src}
                alt={item.alt}
                className="thumbnail-img"
                width="50"
                height="40"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ChooseCarousel;
