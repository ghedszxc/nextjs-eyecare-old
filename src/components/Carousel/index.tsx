"use client";

import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import "./css/embla.css";
import AppConfig from "@/lib/AppConfig";

import { ICarousel, ICarouselSlide } from '@/widgets/Carousel/Carousel.interface'
import EmblaCarouselHeadline from "./EmblaCarouselHeadline";
import { getAkamayUrl } from "@/lib/utilities";


const enhanceHtml = (slide: ICarouselSlide) => {
  const contentText = slide?.teaserText?.text;

  if (!contentText) return null;

  return (
    contentText
      // Convert blockquote with dash to hr
      .replace(/<blockquote><p class="align--center">-<\/p><\/blockquote>/g, "<hr />")
      // Ensure links open in new tab
      .replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ')
  );
};

const EmblaCarousel: React.FC<ICarousel> = (props) => {
  const { title, subTitle, slides, options, layoutType, articleCta } = props;
  
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const renderSlide = (slide: ICarouselSlide | React.ReactNode, index: number) => {
    if (React.isValidElement(slide)) {
      return (
        <div className="embla__slide" key={index}>
          {slide}
        </div>
      );
    }

    const typedSlide = slide as ICarouselSlide;

    return (
      <div className="embla__slide" key={index}>
        {layoutType === 'CarouselWithLogo' ? (
          <div className="embla__slide__content">
            <img src={getAkamayUrl(typedSlide?.pictures?.[0]?.data?.uri)} />
            <p>{typedSlide.displayName}</p>
            {AppConfig.html(enhanceHtml(typedSlide), { targetWindow: '_blank' })}
          </div>
        ) : (
          <div className="embla__slide__content--testimonial">
            <img src={getAkamayUrl(typedSlide?.pictures?.[0]?.data?.uri)} />
            <div>{AppConfig.html(enhanceHtml(typedSlide), { targetWindow: '_blank' })}</div>
            <h5>{typedSlide?.displayName}</h5>
            <h6 className="font-semibold text-[0.85vw] text-center lg:text-left ">{typedSlide?.jobTitle}</h6>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`flex flex-col ${layoutType === "CarouselWithTestimonial" ? "bg-[#dfdfe1] pt-[7vw]" : ""}`}>
      {(title || subTitle) && <EmblaCarouselHeadline title={title} subTitle={subTitle} layoutType={layoutType} />}
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => renderSlide(slide, index))}
          </div>
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>

        {slides.length > 1 && <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>}
      </div>
      {articleCta && (
        <a href={getAkamayUrl(articleCta.url)} target="_blank" className="underline font-bold text-black text-center mb-12">
          {articleCta?.label?.toUpperCase()}
        </a>
      )}
    </div>
  );
};

export default EmblaCarousel;
