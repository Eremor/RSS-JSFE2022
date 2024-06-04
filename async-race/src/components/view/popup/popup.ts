import { BaseComponent } from '../baseComponent';
import { Button } from '../shared/button/button';
import './popup.scss';

export class Popup extends BaseComponent<HTMLDivElement> {
  private text: HTMLParagraphElement;

  private button: Button = new Button(['btn--primary'], 'ok');

  constructor(name: string, time: number) {
    super('div', ['popup']);

    this.text = document.createElement('p');
    this.text.classList.add('popup__text');
    this.text.textContent = `${name} arrived first [ ${time}s ]`;
  }

  public draw = (): void => {
    this.node.append(this.text, this.button.node);

    this.button.onClick(this.closePopup);
  };

  private closePopup = (): void => {
    this.node.remove();
  };
}
