"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import "./css/pagination.css"

import { ICarousel } from "@/widgets/Carousel/Carousel.interface";
import AppConfig from "@/lib/AppConfig";
import Button from "../Button";
import { getAdapterImage } from "@/logic/utilities";
import { useEffect, useRef, useState } from "react";
import VideoModal from "@/widgets/TextCenterWithMedia/VideoModal";
import useResponsive from "@/hooks/useResponsive";
import SignUpModal from "./SignUpModal";
import { EffectCoverflow, Pagination, Virtual } from "swiper/modules";
import { getAkamayUrl } from "@/lib/utilities";
import Picture from "../Picture/Picture";

const RoundaboutCarousel: React.FC<ICarousel> = ({ slides, modal }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [effect, setEffect] = useState<"coverflow" | "slide">("coverflow");
  const swiperRef = useRef<SwiperCore | null>(null);
  const { is } = useResponsive();
  const isTabletLBelow = is("tablet", "<");
  const { html } = AppConfig;

  useEffect(() => {
    const newEffect = isTabletLBelow ? "slide" : "coverflow";
    if (effect !== newEffect) {
      setEffect(newEffect);
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    }
  }, [effect, isTabletLBelow]);

  const handleClick = (index: number) => {
    setActiveModalIndex(index);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const adjustSlideHeights = () => {
    const slides = document.querySelectorAll(".swiper-slide");
    let maxHeight = 0;

    slides.forEach((slide) => {
      const slideContent = slide.querySelector("div");
      if (slideContent) {
        slideContent.style.height = "auto"; 
        maxHeight = Math.max(maxHeight, slideContent.clientHeight);
      }
    });

    slides.forEach((slide) => {
      const slideContent = slide.querySelector("div");
      if (slideContent) {
        slideContent.style.height = `${maxHeight}px`;
      }
    });
  };

  useEffect(() => {
    adjustSlideHeights();
    window.addEventListener("resize", adjustSlideHeights);
    return () => window.removeEventListener("resize", adjustSlideHeights);
  }, []);


  return (
    <div className="w-full pt-[6.77083vw] pb-[5.20833vw] overflow-visible">
      <Swiper
        key={effect}
        modules={[EffectCoverflow, Virtual, Pagination]}
        effect={effect}
        className="flex flex-col w-full max-w-none !px-5 md:px-10  pb-40"
        pagination={{ clickable: true, el: ".carousel-dot-button" }}
        centeredSlides
        loop
        loopAdditionalSlides={3}
        slidesPerView={isTabletLBelow ? 1 : 3}
        spaceBetween={isTabletLBelow ? 20 : 0}
        coverflowEffect={
          effect === "coverflow"
            ? {
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2.5,
              slideShadows: false,
            }
            : undefined
        }
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => {
          if (!slide) return null;
          const isDisabled = slide.viewtype === "VideoContainerDisabled";
          return (
            <SwiperSlide
              key={index}
              className={`flex justify-center items-stretch w-[100vw] h-auto px-[25px] md:px-[4.6875vw] py-[25px] md:py-[33px] border border-[#b1cde3] ${ activeIndex === index ? "bg-[#e1eff9]" : "bg-[#edf6fd]"}`}
              virtualIndex={index}
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.slideToLoop(index);
                }
                if (isDisabled) {
                  handleClick(index);
                }
              }}
            >
              <div className={`flex flex-col items-center justify-center gap-5 h-full md:h-[41vw] text-center ${isDisabled ? "blur-[8px] cursor-pointer" : ""} ${ activeIndex === index ? "" : "opacity-40"}`}>
                {slide.pictures && <div className="relative w-[13.02083vw] md:w-[80px] aspect-square">
                  <Picture
                    className="object-contain"
                    src={getAkamayUrl(getAdapterImage(slide.pictures)?.[0] || "")}
                    alt={slide.teaserTitle || "Icon"}
                    fill={true}
                    unoptimized
                  />
                </div>}
                {slide.teaserTitle && <h4 className="text-[15px] md:text-[1.45833vw] font-bold">{slide.teaserTitle}</h4>}
                {(activeIndex === index && slide.teaserText.text) && (
                  <div className="text-[15px] md:text-[1.40625vw] text-[#53575f] font-extralight leading-[27px] md:leading-[2.70833vw]">
                    {html(slide.teaserText.text)}
                  </div>
                )}
                {(activeIndex === index && slide.teaserTargets?.[0]?.callToActionText) && (
                  <Button onClick={() => handleClick(index)} className="mt-5 md:mt-[3.90625vw] max-md:py-[10px] max-md:px[30px] max-md:text-[15px] w-full border md:border-2 border-black select-none">
                    {slide.teaserTargets[0].callToActionText}
                  </Button>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="carousel-dot-button flex items-center justify-center pt-12 pb-6 gap-2"></div>

      {activeModalIndex !== null && (
        slides[activeModalIndex]?.viewtype === "VideoContainerDisabled" ? (
          <SignUpModal key={activeModalIndex} modal={modal} onClose={handleClose} isActive={openDialog} />
        ) : (
          <VideoModal key={activeModalIndex} dialog={openDialog} videoUrl={slides[activeModalIndex]?.teaserTargets[0]?.target.dataUrl} onClose={handleClose} isActive={openDialog} />
        )
      )}
    </div>
  );
};

export default RoundaboutCarousel;
