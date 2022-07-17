import { filters } from '../../../index';
import { IFilter } from '../../../interface/types';
import { BaseComponent } from '../baseComponent';

export class ClearButton extends BaseComponent {
  private defaultFilter: IFilter = {
    category: '',
    colors: '',
    company: '',
    price: '0 3100',
    search: '',
    sort: 'price-lowest',
    cart: filters.cart,
  };

  constructor() {
    super('button', ['filters__btn'], 'Clear filters');
    this.node.addEventListener('click', this.setDefaultFilters);
  }

  private setDefaultFilters = (): void => {
    for (const key in this.defaultFilter) {
      filters[key as keyof typeof this.defaultFilter] = this.defaultFilter[key as keyof typeof this.defaultFilter];
    }

    this.node.dispatchEvent(new Event('input', { bubbles: true }));
  };
}
