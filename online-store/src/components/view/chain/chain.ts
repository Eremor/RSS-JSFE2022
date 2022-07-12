import { Wrapper } from '../../shared/wrapper';
import { BaseComponent } from '../baseComponent';
import './chain.scss';

export class Chain extends BaseComponent {
  constructor() {
    super('section', ['chain']);
  }

  public draw = (): void => {
    const wrapper: Wrapper = new Wrapper(['chain__wrapper']);

    const title: HTMLHeadingElement = document.createElement('h2');
    title.classList.add('chain__title');
    title.textContent = ' / Products';

    const span: HTMLSpanElement = document.createElement('span');
    span.textContent = 'Home';

    title.prepend(span);

    wrapper.node.append(title);

    this.node.append(wrapper.node);
  };
}
