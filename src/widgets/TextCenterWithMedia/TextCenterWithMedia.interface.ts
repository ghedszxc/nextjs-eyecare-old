import { IPictureCrops } from "@/models/ICrops";

export interface ITextCenterWithMedia {
  title?: string;
  subtitle?: string;
  fallbackVideoImg?: string;
  videoImg?: IPictureCrops;
  videoUrl?: string;
}

export interface IDialog {
  dialog: boolean;
  videoUrl?: string;
}