"use client"
import React from 'react'
import { ICarousel } from '../Carousel/Carousel.interface'
import RoundAboutCarousel from '@/components/RoundaboutCarousel'

const VideoSliderWithCarousel: React.FC<ICarousel> = (props) => {
  return (
    <div className='flex flex-col'>
      <hr className="w-[60%] h-[2px] mx-auto my-10 border border-t-2 border-[#e5e5e5] max-md:hidden"/>
        <RoundAboutCarousel {...props} />
    </div>
  )
}

export default VideoSliderWithCarousel