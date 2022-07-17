import { filters } from '../../..';
import { BaseComponent } from '../baseComponent';
import './cart.scss';

export class Cart extends BaseComponent {
  constructor(classes: string[]) {
    super('div', ['cart', ...classes]);
  }

  public draw = (titleText: string): void => {
    const title: HTMLParagraphElement = document.createElement('p');
    title.classList.add('cart__title');
    title.textContent = titleText;

    const count: HTMLDivElement = document.createElement('div');
    count.classList.add('cart__count');

    const value: HTMLSpanElement = document.createElement('span');
    value.classList.add('cart__value');
    value.textContent = `${filters.cart.length}`;
    value.setAttribute('data-count', 'count');

    count.append(value);
    this.node.append(title, count);
  };
}
