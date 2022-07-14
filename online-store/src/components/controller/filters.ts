import { filters } from '../../index';
import { ICard } from '../../interface/types';

export class Filters {
  private data: ICard[];

  constructor(data: ICard[]) {
    this.data = data;
  }

  public getData = (): ICard[] => {
    this.filters();
    return this.data;
  };

  private filters = (): void => {
    this.sortFilter(this.data);
    this.searchFilter(this.data);
    this.categoryFilter(this.data);
    this.companyFilter(this.data);
  };

  private sortFilter = (items: ICard[]): void => {
    switch (filters.sort) {
      case 'price-lowest':
        items.sort((a: ICard, b: ICard) => (a.price > b.price ? 1 : -1));
        break;
      case 'price-highest':
        items.sort((a: ICard, b: ICard) => (a.price > b.price ? -1 : 1));
        break;
      case 'desc-a':
        items.sort((a: ICard, b: ICard) => (a.name > b.name ? 1 : -1));
        break;
      case 'desc-z':
        items.sort((a: ICard, b: ICard) => (a.name > b.name ? -1 : 1));
        break;
    }
  };

  private searchFilter = (items: ICard[]): void => {
    this.data = [...items.filter((item: ICard) => item.name.includes(filters.search.toLowerCase()))];
  };

  private categoryFilter = (items: ICard[]): void => {
    this.data = [
      ...items.filter((item: ICard) => (filters.category === '' ? item : item.category === filters.category)),
    ];
  };

  private companyFilter = (items: ICard[]): void => {
    this.data = [...items.filter((item: ICard) => (filters.company === '' ? item : item.company === filters.company))];
  };
}
