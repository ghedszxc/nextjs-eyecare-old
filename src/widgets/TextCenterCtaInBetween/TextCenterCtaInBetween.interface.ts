import { ICta } from "@/models/ICta";

export interface ITextCenterCtaInBetween {
  title?: string;
  subtitle?: string;
  footnote: string;
  bg?: string;
  cta: ICta;
}
