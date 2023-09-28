import React, { useState} from "react";
import Marquee from "react-fast-marquee";

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
  
  
  

  return(
    <>
   
      
      <div className="content">
        <Marquee>
        <div className="img">
        {Images.map((image , index)=>(
          <div key={index} className="images">
            <img src={image.src} style={{ width:'275px' , height:'270px'}}/>
            </div>
        ))}
            
        </div>
        </Marquee>
        
      </div>
      
      
    </>
  )

}

export default ChooseCarousel;


