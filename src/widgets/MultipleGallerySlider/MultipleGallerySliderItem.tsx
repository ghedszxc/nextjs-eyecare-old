"use client";

import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

// import './slider.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

// Modules
import { IMultipleGallerySliderItem } from "./MultipleGallerySlider.interface";

// Components
import ResponsivePicture from "@/components/Picture/ResponsivePicture";

const MultipleGallerySliderItem: React.FC<IMultipleGallerySliderItem> = ({ title, pictures, fallbackImages, position }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div className={`inline-block w-full lg:w-1/2 mb-8 ${position == 'left' ? 'pl-0 lg:pl-12' : 'pr-0 lg:pr-12'}`}>
      <div className="font-[100] text-[40px] lg:text-[3.22917vw] mb-[25px]">
        { title?.toUpperCase() }
      </div>
      
      <Swiper
        loop={true}
        modules={[Pagination]}
        pagination={{
          clickable: true
        }}>

        {
          (fallbackImages?.length && pictures?.length) && (
            fallbackImages.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="pb-[40px] lg:pb-[50px]">
                  <ResponsivePicture
                    crops={pictures[index]}
                    name="MultipleGallerySliderItem"
                    type="widgets"
                    url={item}
                  />
                </div>
              </SwiperSlide>
            ))
          )
        }
      </Swiper>
    </div>
  );
};
export default MultipleGallerySliderItem;
