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
    this.colorFilter(this.data);
    this.priceFilter(this.data);
    this.yearFilter(this.data);
    this.popularFilter(this.data);
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
      case 'newer':
        items.sort((a: ICard, b: ICard) => (a.year > b.year ? 1 : -1));
        break;
      case 'older':
        items.sort((a: ICard, b: ICard) => (a.year > b.year ? -1 : 1));
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

  private colorFilter = (items: ICard[]): void => {
    this.data = [
      ...items.filter((item: ICard) => {
        if (filters.colors === '') {
          return item;
        } else {
          for (let i = 0; i < item.colors.length; i++) {
            if (filters.colors === item.colors[i]) {
              return item;
            }
          }
        }
      }),
    ];
  };

  private priceFilter = (items: ICard[]): void => {
    const [min, max]: string[] = filters.price.split(' ');
    this.data = [
      ...items.filter(
        (item: ICard): boolean => Math.round(item.price / 100) >= +min && Math.round(item.price / 100) <= +max
      ),
    ];
  };

  private yearFilter = (items: ICard[]): void => {
    const [min, max]: string[] = filters.year.split(' ');
    this.data = [...items.filter((item: ICard): boolean => item.year >= +min && item.year <= +max)];
  };

  private popularFilter = (items: ICard[]): void => {
    const isPopular = filters.popular === 'true';
    this.data = isPopular ? [...items.filter((item: ICard): boolean => item.popular)] : [...items];
  };
}
