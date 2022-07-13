import { filters } from '../../../index';
import { BaseComponent } from '../baseComponent';

export class QueryFilter extends BaseComponent {
  constructor() {
    super('div', ['filters__query', 'query']);

    const input: HTMLInputElement = document.createElement('input');
    input.classList.add('query__input');
    input.type = 'text';
    input.id = 'query';
    input.placeholder = 'Search';
    input.setAttribute('name', 'query');

    const btn: HTMLButtonElement = document.createElement('button');
    btn.classList.add('query__btn', 'btn', 'visually-hidden');

    this.node.append(input, btn);

    btn.addEventListener('click', this.clearQuery);
    input.addEventListener('input', this.onChange);
  }

  private clearQuery = (e: Event): void => {
    (e.target as HTMLButtonElement).classList.add('visually-hidden');
    (this.node.querySelector('#query') as HTMLInputElement).value = '';
    filters.search = '';
  };

  private onChange = (e: Event): void => {
    e.preventDefault();
    const value: string = (e.target as HTMLInputElement).value;
    filters.search = value;
    const btn = <HTMLButtonElement>this.node.querySelector('.btn');

    if (value.length > 0) {
      btn.classList.remove('visually-hidden');
    } else {
      btn.classList.add('visually-hidden');
    }
  };
}
