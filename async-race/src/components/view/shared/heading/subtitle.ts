import { BaseComponent } from '../../baseComponent';
import './heading.scss';

export class SubTitle extends BaseComponent<HTMLHeadingElement> {
  constructor(text: string) {
    super('h3', ['subtitle']);
    this.node.textContent = text;
  }
}
