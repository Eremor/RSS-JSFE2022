import { filters } from '../../../index';
import { saveToLocalStorage } from '../../../util/util';
import { BaseFilterComponent } from './baseFilterComponent';

type CategoryType = {
  value: string;
  desc: string;
};

export class CategoryFilter extends BaseFilterComponent {
  private values: CategoryType[] = [
    {
      value: '',
      desc: 'all',
    },
    {
      value: 'office',
      desc: 'office',
    },
    {
      value: 'living room',
      desc: 'living room',
    },
    {
      value: 'kitchen',
      desc: 'kitchen',
    },
    {
      value: 'bedroom',
      desc: 'bedroom',
    },
    {
      value: 'dining',
      desc: 'dining',
    },
    {
      value: 'kids',
      desc: 'kids',
    },
  ];

  constructor() {
    super(['filters__category', 'category'], 'Category');

    const list: HTMLDivElement = document.createElement('div');
    list.classList.add('category__list');

    this.values.forEach(({ value, desc }: CategoryType) => {
      const item: HTMLButtonElement = document.createElement('button');
      item.classList.add('category__item');
      item.textContent = desc;
      item.dataset.category = value;

      if (value === filters.category) {
        item.classList.add('category__item--active');
      }

      list.append(item);
    });

    this.node.append(list);
    list.addEventListener('click', this.changeCategory);
  }

  private changeCategory = (e: Event): void => {
    const target = <HTMLElement>e.target;
    const parent = <HTMLElement>target.parentElement;
    const children: HTMLCollection = parent.children;

    for (let i = 0; i < children.length; i++) {
      if (children[i].classList.contains('category__item--active')) {
        children[i].classList.remove('category__item--active');
      }
    }

    target.classList.add('category__item--active');
    filters.category = <string>target.dataset.category;

    saveToLocalStorage();
    parent.dispatchEvent(new Event('input', { bubbles: true }));
  };
}
