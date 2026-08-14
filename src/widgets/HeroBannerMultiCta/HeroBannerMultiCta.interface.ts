import { IPictureCrops } from "@/models/ICrops";
import { ICta } from "@/models/ICta";

export interface IHeroBannerMultiCta {
  picture?: string[];
  title?: string;
  subtitle?: string;
  image?: string;
  cta: ICta;
  headImg?: string;
}
