export interface IFaq {
  title?: string;
  subtitle?: string;
  lists: IFaqItem[];
}

export interface IFaqItem {
  title: string;
  subtitle: string;
}
