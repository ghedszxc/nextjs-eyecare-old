import AppConfig from '@/lib/AppConfig';
import React from 'react'

type HeaderProps = {
  title?: string,
  subTitle?: string,
  layoutType?: string
};

const EmblaCarouselHeadline: React.FC<HeaderProps> = (props) => {
  const { title, subTitle, layoutType } = props;
  const { html } = AppConfig;

  return (
    <div className="text-center p-[6vw 15.5vw 0vw] md:px-[15vw]">
      {title && (
        <h2 className={`text-[45px] md:text-[4.16667vw] tracking-normal text-center uppercase font-[100] ${
          layoutType === 'CarouselWithTestimonial' 
            ? 'px-[30px] leading-[45px] lg:leading-[70px]'
            : 'mb-6'
        }`}>
          {html(title)}
        </h2>
      )}
      {subTitle && <p className="text-[17px] md:text-[2vw] md:leading-[3vw] text-[#53575f] tracking-normal font-[100] px-[8vw] md:px-0">{html(subTitle)}</p>}
    </div>
  )
}

export default EmblaCarouselHeadline
