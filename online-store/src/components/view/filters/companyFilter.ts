import { filters } from '../../../index';
import { BaseFilterComponent } from './baseFilterComponent';

type CompanyType = {
  value: string;
  desc: string;
};

export class CompanyFilter extends BaseFilterComponent {
  private values: CompanyType[] = [
    {
      value: '',
      desc: 'all',
    },
    {
      value: 'marcos',
      desc: 'marcos',
    },
    {
      value: 'liddy',
      desc: 'liddy',
    },
    {
      value: 'ikea',
      desc: 'ikea',
    },
    {
      value: 'caressa',
      desc: 'caressa',
    },
  ];

  constructor() {
    super(['filters__company', 'company'], 'Company');

    const list: HTMLSelectElement = document.createElement('select');
    list.classList.add('company__list');

    this.values.forEach(({ value, desc }: CompanyType) => {
      const opt: HTMLOptionElement = document.createElement('option');
      opt.classList.add('company__item');
      opt.value = value;
      opt.textContent = desc;
      list.append(opt);
    });

    this.node.append(list);

    list.value = filters.company;
    list.addEventListener('input', this.onChange);
  }

  private onChange = (e: Event): void => {
    const value: string = (e.target as HTMLSelectElement).value;
    filters.company = value;
  };
}
