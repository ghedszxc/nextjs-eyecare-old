import { IPictureCrops } from "@/models/ICrops";

export interface IPhotoSlider {
  images: IPhotoSliderItem[];
  isCropped: boolean;
}

export interface IPhotoSliderItem {
  picture?: IPictureCrops;
  fallbackImage?: string;
  isCropped: boolean;
}