"use client";

// Modules
import { ITextCenterWithMedia } from "./TextCenterWithMedia.interface";
import AppConfig from "@/lib/AppConfig";
import { useState } from "react";
import { usePathname } from "next/navigation";

// Components
import ResponsivePicture from "@/components/Picture/ResponsivePicture";
import VideoModal from "./VideoModal";
import Icon from "@/components/global_elements/Icon/Icon";

const TextCenterWithMedia = ({ title, subtitle, fallbackVideoImg, videoImg, videoUrl }: ITextCenterWithMedia) => {
  // Hooks
  const [dialog, setDialog] = useState<boolean>(false);
  const pathname = usePathname(); // temporary solution
  
  const bgClass = pathname === "/practice-paths/remote-optometrist/" 
    ? "bg-[#e3e3e3]" 
    : "";

  // Variables
  
  // Functions
  const onClickHandler = () => {
    setDialog(true);
  };

  const onCloseHandler = () => {
    setDialog(false);
  };
  // Effects

  return (
    <div className={`flex justify-center text-center ${bgClass}`}>
      <div className="w-[85%] lg:w-2/3 font-light py-12 lg:py-20">
        <h2 className="font-[100] text-[40px]/[50px] lg:text-[4.16667vw]/[normal] text-center mb-5 lg:mb-8">
          {title}
        </h2>

        {
          subtitle &&
          (
            <div className="prose-textCenterWithMediaMobile lg:prose-textCenterWithMediaDesktop">
              {AppConfig.html(subtitle)}
            </div>
          )
        }

        <div className="relative">
          {
            videoUrl && (
              <div onClick={onClickHandler}>
                <Icon
                  type="play"
                  className="
                    w-[45px] md:w-[70px] lg:w-[80px]
                    h-[45px] md:h-[70px] lg:h-[80px]
                    absolute
                    left-[45%] md:left-[47%] lg:left-[48%]
                    top-[37%] md:top-[40%] lg:top-[41%]
                    cursor-pointer"
                />
              </div>
            )
          }

          {
            (videoImg || fallbackVideoImg) && (
            <ResponsivePicture
              crops={videoImg}
              url={fallbackVideoImg}
              name="TextCenterWithMedia"
              type="widgets"
              className="object-cover"
            />
          )}
        </div>

        <VideoModal dialog={dialog} videoUrl={videoUrl} onClose={onCloseHandler} isActive={dialog} />
      </div>
    </div>
  );
};
export default TextCenterWithMedia;
