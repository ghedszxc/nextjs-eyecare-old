import { IPictureCrops } from "@/models/ICrops";
import { ICta } from "@/models/ICta";

export interface IMultipleGallerySlider {
  contents: IMultipleGallerySliderItem[];
}

export interface IMultipleGallerySliderItem {
  title: string;
  pictures?: IPictureCrops[];
  fallbackImages?: string[];
  position?: string;
}