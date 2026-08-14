import { IPictureCrops } from "@/models/ICrops";
import { ICta } from "@/models/ICta";

export interface ITextCenterWithAvatar {
  title: string;
  subtitle: string;
  icons: ITextCenterWithAvatarItem[];
}

export interface ITextCenterWithAvatarItem {
  title: string;
  subtitle: string;
  cta: ICta;
  icon?: string,
  readMoreText: string;
  position: number;
}

export interface IDialog {
  readMoreText?: string;
}
