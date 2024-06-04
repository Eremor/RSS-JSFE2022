import { filters } from '../../../index';
import { saveToLocalStorage } from '../../../util/util';
import { BaseFilterComponent } from './baseFilterComponent';

type ColorsType = {
  value: string;
  desc: string;
};

export class ColorsFilter extends BaseFilterComponent {
  private values: ColorsType[] = [
    {
      value: '',
      desc: 'All',
    },
    {
      value: '#ff0000',
      desc: '',
    },
    {
      value: '#00ff00',
      desc: '',
    },
    {
      value: '#0000ff',
      desc: '',
    },
    {
      value: '#000',
      desc: '',
    },
    {
      value: '#ffb900',
      desc: '',
    },
  ];

  constructor() {
    super(['filters__colors', 'colors'], 'Colors');

    const list: HTMLDivElement = document.createElement('div');
    list.classList.add('colors__list');

    this.values.forEach(({ value, desc }: ColorsType): void => {
      const item: HTMLButtonElement = document.createElement('button');
      item.classList.add('colors__item');
      item.textContent = desc;
      item.dataset.color = value;

      value === '' ? item.classList.add('colors__item--text') : item.classList.add('colors__item--circle');

      if (value === filters.colors) {
        value === ''
          ? item.classList.add('colors__item--text-active')
          : item.classList.add('colors__item--circle-active');
      }

      list.append(item);
    });

    this.node.append(list);

    list.addEventListener('click', this.changeColors);
  }

  private changeColors = (e: Event): void => {
    const target = <HTMLElement>e.target;
    const parent = <HTMLElement>target.parentElement;
    const children: HTMLCollection = parent.children;

    for (let i = 0; i < children.length; i++) {
      if (children[i].classList.contains('colors__item--text-active')) {
        children[i].classList.remove('colors__item--text-active');
      }

      if (children[i].classList.contains('colors__item--circle-active')) {
        children[i].classList.remove('colors__item--circle-active');
      }
    }

    if (target.classList.contains('colors__item')) {
      target.dataset.color === ''
        ? target.classList.add('colors__item--text-active')
        : target.classList.add('colors__item--circle-active');
    }

    filters.colors = <string>target.dataset.color;

    saveToLocalStorage();
    parent.dispatchEvent(new Event('input', { bubbles: true }));
  };
}
