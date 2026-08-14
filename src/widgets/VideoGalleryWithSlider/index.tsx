"use client";

import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

// Modules
import { IVideoGalleryWithSlider } from "./VideoGalleryWithSlider.interface";
import { useEffect, useState } from "react";
import useResponsive from "@/hooks/useResponsive";

// Components
import ResponsivePicture from "@/components/Picture/ResponsivePicture";
import Icon from "@/components/global_elements/Icon/Icon";
import VideoModal from "../TextCenterWithMedia/VideoModal";


const VideoGalleryWithSlider = ({ videos }: IVideoGalleryWithSlider) => {
  // Hooks
  const [dialog, setDialog] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>("");

  const [contentPerPage, setContentPerPage] = useState<number>(3);
  const { is } = useResponsive();
  // Variables
  const isSmallScreen = is("tablet", "<");

  
  // Functions
  const onClickHandler = (url: string) => {
    setDialog(true);
    setSelectedVideoUrl(url);
  };

  const onCloseHandler = () => {
    setDialog(false);
  };
  
  useEffect(() => {
    const newEffect = isSmallScreen ? 1 : 3;
    if (contentPerPage !== newEffect) setContentPerPage(newEffect);
  }, [contentPerPage, isSmallScreen]);
  
  return (
    <div className="w-full lg:w-[75vw] mx-auto mt-12">
      <Swiper
        slidesPerView={contentPerPage}
        loop={true}

        modules={[Pagination]}

        pagination={{
          clickable: true
        }}>
        
        {
          videos.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={`flex justify-center text-center ${!index ? 'pr-0 lg:pr-[50px]' : index == 1 ? 'px-0 lg:px-[25px]' : 'pl-0 lg:pl-[50px]'}`}>
                <div className="w-[91%] lg:w-full py-12" >
                  <div className="relative">
                    {
                      item.videoUrl && (
                        <div onClick={() => onClickHandler(item.videoUrl)}>
                          <Icon
                            type="play"
                            className="
                              w-[45px] lg:w-[4.6875vw]
                              h-[45px] lg:h-[4.6875vw]
                              mx-auto
                              cursor-pointer
                              absolute
                              left-[45%] lg:left-[42%]
                              top-[37%] lg:top-[31%]"
                          />
                        </div>
                      )
                    }

                    {
                      (item.videoImg || item.fallbackVideoImg) && (
                        <ResponsivePicture
                          crops={item.videoImg}
                          url={item.fallbackVideoImg}
                          name="TextCenterWithMedia"
                          type="widgets"
                          className="object-cover"
                        />
                      )
                    }

                    <div className="
                          text-[20px] lg:text-[1.66667vw]
                          font-[100] text-center
                          mb-2 lg:mb-8
                          px-12
                          py-3 lg:py-6
                          bg-[#dce4f3]">
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
        
      </Swiper>
      
      <VideoModal dialog={dialog} videoUrl={selectedVideoUrl} onClose={onCloseHandler} isActive={dialog} />
    </div>
  );
};

export default VideoGalleryWithSlider;
