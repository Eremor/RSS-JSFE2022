import { filters } from '../../../index';
import { IFilter } from '../../../interface/types';
import { saveToLocalStorage } from '../../../util/util';
import { BaseComponent } from '../baseComponent';

export class ClearButton extends BaseComponent {
  private defaultFilter: IFilter = {
    category: '',
    colors: '',
    company: '',
    price: '0 3100',
    search: '',
    sort: filters.sort,
    cart: filters.cart,
    year: '2018 2022',
    popular: 'false',
  };

  constructor() {
    super('button', ['filters__btn'], 'Clear filters');
    this.node.addEventListener('click', this.setDefaultFilters);
  }

  private setDefaultFilters = (): void => {
    for (const key in this.defaultFilter) {
      filters[key as keyof typeof this.defaultFilter] = this.defaultFilter[key as keyof typeof this.defaultFilter];
    }

    saveToLocalStorage();
    this.node.dispatchEvent(new Event('input', { bubbles: true }));
  };
}
