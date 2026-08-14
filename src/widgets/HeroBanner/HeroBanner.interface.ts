import { IAdapterPicture } from "@/models/ICrops";
import { ICta } from "@/models/ICta";

export interface IHeroBanner {
  picture?: string[];
  headImg?: IAdapterPicture;
  title?: string;
  subtitle?: string;
  image?: string;
  cta?: ICta;
  ctaLogo?: any;
  isCropped?: boolean;
  viewType?: string;
}

export interface ICTALogo {
  picture?: string[];
  cta?: ICta;
}
