"use client"

import React from "react";
import Slider from "react-slick";
const Slick = ({ latest }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{padding:"40px"}}>
      <Slider {...settings}>
        {latest?.map((pr) =>
          pr && pr.title? (
            <div key={pr._id}>
              <div className="lastslick">
                <img
                  style={{ height: "300px", width: "400px" }}
                  src={pr.image.url}
                  alt=""
                />
                <h3 className="climb">{pr.title}</h3>
                <h4>{pr.price} so'm</h4>
              </div>
            </div>
          ) : null
        )}
      </Slider>
    </div>
  );
};

export default Slick;
