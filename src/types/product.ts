export interface Price {
  id?: number;
  title?: string;
  subtitle?: string;
  price?: number;
  isPopular?: boolean;
  discount?: number;
}

export interface Pricing {
  text?: string;
  prices?: Price[];
}

export interface Product {
  id: number;
  typeId?: number;
  name: string;
  fullname?: string;
  categories: number[];
  image: string;
  url?: string;
  isNew?: boolean;
  slug?: string;
  banner?: string;
  description?: string;
  info?: string;
  appstore?: string;
  playstore?: string;
  pricing?: Pricing;
}
