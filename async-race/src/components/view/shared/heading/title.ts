import { BaseComponent } from '../../baseComponent';
import './heading.scss';

export class Title extends BaseComponent<HTMLHeadingElement> {
  constructor(text: string) {
    super('h2', ['title']);
    this.node.textContent = text;
  }
}
