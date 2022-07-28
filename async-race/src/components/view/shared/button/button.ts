import { BaseComponent } from '../../baseComponent';
import './button.scss';

export class Button extends BaseComponent<HTMLButtonElement> {
  constructor(classes: string[], text: string) {
    super('button', ['btn', ...classes]);
    this.node.textContent = text;
  }

  public onClick = (callback: (e: Event) => void): void => {
    this.node.addEventListener('click', callback);
  };
}
