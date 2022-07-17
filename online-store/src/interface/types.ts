export interface IFilter {
  sort: string;
  search: string;
  category: string;
  company: string;
  colors: string;
  price: string;
  cart: string;
  year: string;
}

export interface ICard {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  company: string;
  description: string;
  category: string;
  year: number;
}
