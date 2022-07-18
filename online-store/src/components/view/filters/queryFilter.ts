import { filters } from '../../../index';
import { saveToLocalStorage } from '../../../util/util';
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
    input.autocomplete = 'off';
    input.value = filters.search;

    const btn: HTMLButtonElement = document.createElement('button');
    btn.classList.add('query__btn', 'btn', 'visually-hidden');

    if (input.value.length > 0) {
      btn.classList.remove('visually-hidden');
    }

    this.node.append(input, btn);

    btn.addEventListener('click', (e: Event): void => this.clearQuery(e, input));
    input.addEventListener('input', (e: Event): void => this.onChange(e, btn));
  }

  private clearQuery = (e: Event, query: HTMLInputElement): void => {
    (e.target as HTMLButtonElement).classList.add('visually-hidden');
    query.value = '';
    query.dispatchEvent(new Event('input', { bubbles: true }));
  };

  private onChange = (e: Event, btn: HTMLButtonElement): void => {
    e.preventDefault();
    const value: string = (e.target as HTMLInputElement).value;
    filters.search = value;
    saveToLocalStorage();

    if (value.length > 0) {
      btn.classList.remove('visually-hidden');
    } else {
      btn.classList.add('visually-hidden');
    }
  };
}
