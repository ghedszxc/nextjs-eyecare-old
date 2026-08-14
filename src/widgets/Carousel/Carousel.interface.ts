import { ICta } from '@/models/ICta';
import { EmblaOptionsType } from 'embla-carousel'

export interface ICarouselSlide {
  id: string;
  displayName: string;
  jobTitle: string;
  // title: string;
  teaserTitle?: string;
  // type: string;
  viewtype?: string;
  uriTemplate: string;
  pictures?: any;
  data?: any;
  teaserText: {
    text: string;
    __typename: string;
  };
  // crops: any[]; // update this later
  // data: any; // update this later
  // subjectTaxonomy: any[];
  __typename: string;
  teaserTargets: any[];
}

export interface ITeaserTargets {
  teaserText: {
      text: string;
  };
  teaserTargets: any[];
  pictures: []
}

export interface ICarousel {
  title?: string;
  subTitle?: string;
  slides: ICarouselSlide[];
  options?: EmblaOptionsType;
  layoutType: 'CarouselWithLogo' | 'CarouselWithTestimonial' | 'Custom';
  articleCta?: ICta;
  modal: ITeaserTargets;
}
