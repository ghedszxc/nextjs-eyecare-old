import { ICta } from "@/models/ICta";

export interface IIConCTA {
  viewType: string;
  header: string;
  icons: IIconItem[];
  longText?: any;
  cta?: ICta;
  backgroundColor: string;
}

export interface IIconItem {
  icon: string;
  header: string;
  cta?: ICta;
  viewType?: string;
}
