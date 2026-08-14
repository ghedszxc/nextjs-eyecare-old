import { IPictureCrops } from "@/models/ICrops";
import { ICta } from "@/models/ICta";

export interface ILRdynamicText {
  title?: string;
  subtitle?: string;
  fallbackImage?: string;
  picture?: IPictureCrops;
  cta: ICta | null;
  isCropped: boolean;
}
