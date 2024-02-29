export interface Product {
  id: number;
  name: string;
  categories: number[];
  image: string;
  url?: string;
  isNew?: boolean;
  slug?: string;
}
