import { ICta } from "@/models/ICta";
import { IPictureCrops } from "@/models/ICrops";

export interface ILongTextCenterCtaBottom {
  picture?: IPictureCrops;
  fallbackImage?: string,
  title?: string;
  subtitle?: string;
  cta: ICta;
  image?: string;
  isCropped: boolean;
}
