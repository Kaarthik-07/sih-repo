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

const ChooseCarousel  = ()=>{
  const [count , setCount] = useState(0);
  useEffect(() => {
    const images = document.querySelectorAll(".content .img img");
    images.forEach((image, index) => {
      if (index === count) {
        image.classList.remove("hidden");
      } else {
        image.classList.add("hidden");
      }
    });
  }, [count]);
  const prev = (a)=>{
    if(a == 0){
      setCount(Images.length-1)
    }
    else{
      setCount(a -1);
    }
  }
  const next = (a)=>{
    if(a == Images.length-1){
      setCount(0)
    }
    else{
      setCount(a+1);
    }
  }

  return(
    <>
    <div className="container">
      <button className="btn" type="button" onClick={()=>prev(count)}><img src="src/components/left-arrow.png" className="arrowimgleft"/></button>
      <div className="content">
        <div className="img">
        {Images.map((image, index) => (
              <div
                key={image.id}
                className={`img-container ${index === count ? "active" : ""}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ width: "250px", height: "375px" }}
                />
                
              </div>
            ))}
            
        </div>
        <div className="name" style={{display:'flex' , justifyContent:'center' , marginTop:'5px'}}>
        <span>{Images[count].alt}</span>
        </div>
      </div>
      <button className="btn" type="button" onClick={()=> next(count)}><img src="src/components/next.png" className="arrowimgright"/></button>


    </div>
    </>
  )

}

export default ChooseCarousel;


/*
<img src={Images[count].src} style={{width:'250px' , height:'375px' }}/>
          <span>{Images[count].alt}</span>
          */