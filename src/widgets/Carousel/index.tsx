import React from 'react'
import EmblaCarousel from '@/components/Carousel'
// import Header from '@/components/Carousel/Header'
import { ICarousel } from './Carousel.interface'

const Carousel: React.FC<ICarousel> = (props) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div>
      <EmblaCarousel {...props} />
    </div>
  )
}

export default Carousel
