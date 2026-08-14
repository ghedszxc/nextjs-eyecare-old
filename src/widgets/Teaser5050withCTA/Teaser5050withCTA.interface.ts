import { IPictureCrops } from "@/models/ICrops";
import { ICta } from "@/models/ICta";

export interface ITeaser5050withCTA {
  viewtype?: string;
  title?: string;
  subtitle?: string;
  fallbackImage?: string;
  picture?: IPictureCrops;
  cta: ICta | null;
  backgroundColor?: string;
}
