import { SortFilter } from '../filters/sortFilter';
import './sort.scss';

export class Sort {
  public draw = (): void => {
    const container = <HTMLDivElement>document.querySelector('.sort');

    const value: HTMLSpanElement = document.createElement('span');
    value.classList.add('sort__value');
    value.textContent = '0';
    value.setAttribute('data-count', 'count');

    const count: HTMLParagraphElement = document.createElement('p');
    count.classList.add('sort__count');
    count.textContent = ' Products found';
    count.prepend(value);

    const line: HTMLHRElement = document.createElement('hr');

    const text: HTMLParagraphElement = document.createElement('p');
    text.classList.add('sort__text');
    text.textContent = 'Sort by';

    const sortFilter: SortFilter = new SortFilter();

    container.append(count, line, text, sortFilter.node);
  };
}
