export type URL = string;

export type TLink = {
  label: string;
  url: string;
  type: "CTA" | "singleLink" | "multipleLink" | "extLink";
  subLinks?: TLink[];
  logo?: any;
};

export interface INavigation {
  lang: string;
  mainLogo: URL;
  logoList: URL[];
  links: TLink[];
  loginLink: TLink;
}
