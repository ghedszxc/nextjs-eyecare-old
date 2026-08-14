export interface IGridCards {
  title?: string,
  subTitle?: string,
  cards?: IGridCard[],
};

export interface IGridCard {
  cardTitle?: string,
  description?: string,
  date?: string,
  ctaLogo?: any,
};