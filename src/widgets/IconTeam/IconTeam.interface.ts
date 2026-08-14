import { IPictureCrops } from "@/models/ICrops";

export interface IIconTeam {
  title?: string;
  subtitle?: any;
  countryList: IIconTeamItem[];
}

export interface IIconTeamItem {
  countryName: string;
  name: string;
  description: string;
  fallbackImage: string;
  picture: IPictureCrops,
}