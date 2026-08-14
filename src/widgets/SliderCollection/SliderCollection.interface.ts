import { IPictureCrops } from "@/models/ICrops";
import { ICta } from "@/models/ICta";

export interface ISliderCollection {
  title: string;
  subtitle: string;
  contents: ISliderCollectionItem[];
  isCropped: boolean;
}

export interface ISliderCollectionItem {
  picture?: IPictureCrops;
  fallbackImage?: string;
  isCropped: boolean;
  cta: ICta;
  title: string;
  subtitle: string;
}