import { filters } from '../../../index';
import { saveToLocalStorage } from '../../../util/util';
import { BaseComponent } from '../baseComponent';

type OptionsData = {
  value: string;
  desc: string;
};

export class SortFilter extends BaseComponent {
  private values: OptionsData[] = [
    {
      value: 'price-lowest',
      desc: 'Price (Lowest)',
    },
    {
      value: 'price-highest',
      desc: 'Price (Highest)',
    },
    {
      value: 'desc-a',
      desc: 'desc (A-Z)',
    },
    {
      value: 'desc-z',
      desc: 'desc (Z-A)',
    },
    {
      value: 'newer',
      desc: 'first newer',
    },
    {
      value: 'older',
      desc: 'first older',
    },
  ];

  constructor() {
    super('select', ['sort__list']);
    this.node.id = 'sort';
    this.node.setAttribute('name', 'sort');

    this.values.forEach(({ value, desc }: OptionsData) => {
      const opt: HTMLOptionElement = document.createElement('option');
      opt.value = value;
      opt.textContent = desc;
      this.node.append(opt);
    });
    (this.node as HTMLSelectElement).value = filters.sort;

    this.node.addEventListener('input', this.onChange);
  }

  private onChange = (e: Event): void => {
    const value: string = (e.target as HTMLSelectElement).value;
    filters.sort = value;
    saveToLocalStorage();
  };
}
