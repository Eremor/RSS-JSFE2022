import { filters } from '../../index';
import { ICard } from '../../interface/types';

export class Filters {
  private readonly data: ICard[];

  constructor(data: ICard[]) {
    this.data = data;
  }

  public getData = (): ICard[] => {
    this.filters();
    return this.data;
  };

  private filters = (): void => {
    this.sortFilter(this.data);
  };

  private sortFilter = (items: ICard[]) => {
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
}
