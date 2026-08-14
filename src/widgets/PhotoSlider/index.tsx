"use client";

import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './slider.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';


// Modules
import { cva } from "class-variance-authority";
import { IPhotoSlider } from "./PhotoSlider.interface";

// Components
import PhotoSliderItem from "./PhotoSliderItem"

const cvaVariants = cva([], {
  variants: {
    height: {
      small: ["h-[164px] relative"],
      large: ["h-[100vh] lg:h-[90vh] relative"],
    },
    noImageHeight: {
      small: ["h-[164px] relative"],
      large: ["h-[683px] relative"],
    },
    fontSize: {
      small: ["text-[32px] lg:text-[40px] font-medium"],
      large: ["text-[9px] lg:text-[1.5625vw] font-medium"]
    },
  },
});

const PhotoSlider = ({ images, isCropped }: IPhotoSlider) => {
  // Hooks
  // Variables
  // Functions
  // Effects
  
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}

        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}

        pagination={{
          // el: '.swiper-pagination-bullet',
          clickable: true,
        }}
        >

        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <PhotoSliderItem {...item} isCropped={isCropped} />
          </SwiperSlide>
        ))}
        
        <div className="swiper-button-prev" style={{ color: 'white' }}></div>
        <div className="swiper-button-next" style={{ color: 'white' }}></div>
        {/* <div className="swiper-pagination-bullet" style={{ background: 'red', color: '#ffffff', border: '1px solid red' }}></div> */}
      </Swiper>
    </div>
  );
};

export default PhotoSlider;
