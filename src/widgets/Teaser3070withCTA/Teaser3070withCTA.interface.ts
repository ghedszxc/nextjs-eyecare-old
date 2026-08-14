import { IPictureCrops } from "@/models/ICrops";
import { ICta } from "@/models/ICta";

export interface ITeaser3070withCTA {
  title?: string;
  subtitle?: string;
  fallbackImage?: string;
  picture?: IPictureCrops;
  cta: ICta | null;
}
