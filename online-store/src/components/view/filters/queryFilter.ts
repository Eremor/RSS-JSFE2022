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

    btn.addEventListener('click', (e: Event) => this.clearQuery(e, input));
    input.addEventListener('input', (e: Event) => this.onChange(e, btn));
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

    if (value.length > 0) {
      btn.classList.remove('visually-hidden');
    } else {
      btn.classList.add('visually-hidden');
    }
  };
}
