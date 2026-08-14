"use client";

// Modules
import { cva } from "class-variance-authority";
import { ISoundCloud } from "./SoundCloud.interface";
// import AppConfig from "@/logic/configs/AppConfig";
import AppConfig from "@/lib/AppConfig";
import { useState } from "react";

// Components
import ResponsivePicture from "@/components/Picture/ResponsivePicture";
import { Button } from "@/components/global_elements/Button/Button";
import Anchor from "@/components/Anchor/Anchor";
import Icon from "@/components/global_elements/Icon/Icon";
import ReactPlayer from "react-player";


const SoundCloud = ({ title, subtitle, fallbackImage, picture, soundLink, logo, logoCrop }: ISoundCloud) => {
  // Hooks
    const [displayIcon, setDisplayIcon] = useState<any>('playBlue');
    const [play, setPlay] = useState<boolean>(false);
  // Variables
  // Functions
  const onClickHandler = () => {
    if (displayIcon == "playBlue") {
      setPlay(true);
      setDisplayIcon('pauseBlue')
    } else {
      setDisplayIcon('playBlue')
      setPlay(false)
    }
  };
  // Effects
  
  return (
    <div className="w-full lg:w-[75vw] mx-auto flex px-4 lg:px-0">
      {picture && (
        <ResponsivePicture
          crops={picture}
          name="HeroBanner"
          type="widgets"
          url={fallbackImage}
          className="h-[530px] lg:h-[240px] w-full"
        />
      )}
      
      <div className="absolute mt-[50px] lg:mt-[70px] ml-0 md:ml-[3vw] flex flex-col lg:flex-row">
        <div className="w-full lg:w-[9vw] xl:w-[9vw] flex flex-col">
          <div onClick={onClickHandler} className="m-auto">
            <Icon
              type={displayIcon}
              className="
                w-[85px] lg:w-[50px] xl:w-[70px]
                h-[85px] lg:h-[50px] xl:h-[70px]
                cursor-pointer"
            />
          </div>
          <ReactPlayer className="hidden" playing={play} url={soundLink}/>
        </div>

        <div className="
              w-[90vw] lg:w-[50vw] xl:w-[50vw]
              flex flex-col
              text-center lg:text-start
              mt-12 lg:mt-0
              px-0 lg:px-2
            ">
          <div className="
                text-[26px] lg:text-[1.875vw]
                leading-[36px] lg:leading-[2.08333vw]
                font-[300]
                mb-8 lg:mb-1">
            {title}
          </div>

          <div className="
                text-[18px] lg:text-[1.575vw]
                leading-[20px] lg:leading-[1.82292vw]
                tracking-[.0625em]
                font-[300] text-[#5e6b74]
                mb-8 lg:mb-0">
            {AppConfig.html(subtitle)}
          </div>
        </div>
        
        <div className="w-full lg:w-[9vw] flex flex-col">
          <div className="m-auto">

            {logo && (
              <ResponsivePicture
                crops={logoCrop}
                name="HeroBanner"
                type="widgets"
                url={logo}
                isCropped={true}
              />
            )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SoundCloud;
