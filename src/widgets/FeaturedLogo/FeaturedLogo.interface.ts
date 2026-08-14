import { IPictureCrops } from "@/models/ICrops";
import { ICta } from "@/models/ICta";

export interface IFeaturedLogo {
  header: string;
  brands: IFeaturedLogoItem[];
  longText?: any;
  cta?: ICta;
}

export interface IFeaturedLogoItem {
  picture?: IPictureCrops;
  fallbackImage: string,
}
