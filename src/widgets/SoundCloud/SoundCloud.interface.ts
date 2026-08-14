import { IPictureCrops } from "@/models/ICrops";

export interface ISoundCloud {
  picture?: IPictureCrops;
  fallbackImage?: string,
  title?: string;
  subtitle?: string;
  soundLink: string;
  logoCrop?: IPictureCrops;
  logo?: string;
}
