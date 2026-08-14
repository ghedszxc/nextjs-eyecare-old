import { TLink, URL } from "../Navigation/INavigation.interface";

export interface ILogo {
  photo: URL;
  link: URL;
}
export interface ICopyright {
  disclaimer: any;
  copyRight: string;
}

export interface IFooter {
  lang: string;
  logoList: ILogo[];
  linkList: TLink[];
  copyRight: ICopyright;
}
