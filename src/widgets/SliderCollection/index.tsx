"use client";

import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';


// Modules
import { ISliderCollection } from "./SliderCollection.interface";

// Components
import SliderCollectionItem from "./SliderCollectionItem"

const SliderCollection = ({ title, subtitle, contents, isCropped }: ISliderCollection) => {
  // Hooks
  // Variables
  // Functions
  // Effects
  
  return (
    <div className="text-center">
      {
        title && (
          <div className="leading-[4.6875vw] font-[100] border-t border-black
                text-[18px] md:text-[4.16667vw]
                pt-6 md:pt-16 lg:pt-32
                mb-4 lg:mb-12
                mx-12 md:mx-24 lg:mx-40">
            {title}
          </div>
        )
      }
      
      {
        subtitle && (
          <div className="
                text-[14px] lg:text-[1.40625vw]
                leading-[25px] lg:leading-[1.875vw]
                font-[100] text-[#5e6b74]
                mb-4 lg:mb-0
                mx-12 md:mx-24 lg:mx-44">
            {subtitle}
          </div>
        )
      }

      <Swiper
        modules={[Navigation, Pagination]}

        loop={true}
        navigation={true}
        pagination={{
          clickable: true
        }}>
        {contents.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderCollectionItem {...item} isCropped={isCropped} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderCollection;
