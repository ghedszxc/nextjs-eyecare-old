import { IPictureCrops } from "@/models/ICrops";

export interface IVideoGalleryWithSlider {
  videos: IVideoGalleryWithSliderItem[];
}


export interface IVideoGalleryWithSliderItem {
  videoImg?: IPictureCrops;
  fallbackVideoImg: string | undefined;
  title: string;
  videoUrl: string;
}