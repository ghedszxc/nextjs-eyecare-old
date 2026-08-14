"use client";

import React from 'react';


// Modules
import { IMultipleGallerySlider } from "./MultipleGallerySlider.interface";

// Components
import MultipleGallerySliderItem from "./MultipleGallerySliderItem"

const MultipleGallerySlider = ({ contents }: IMultipleGallerySlider) => {
  // Hooks
  // Variables
  // Functions
  // Effects
  
  return (
    <div className="w-full lg:w-[75vw] mx-auto text-center px-4 lg:px-0 mb-12">
      {
        contents.map((item, index) => (
          <MultipleGallerySliderItem {...item} key={index} position={index ? 'left' : 'right'} />
        ))
      }
    </div>
  );
};

export default MultipleGallerySlider;
