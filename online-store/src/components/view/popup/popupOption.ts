import { BaseComponent } from '../baseComponent';

export class PopupOption extends BaseComponent {
  constructor(title: string, text: string | number) {
    super('div', ['popup__option']);

    const titleComponent: HTMLHeadingElement = document.createElement('h3');
    titleComponent.classList.add('popup__subtitle');
    titleComponent.textContent = title;

    const textComponent: HTMLParagraphElement = document.createElement('p');
    textComponent.classList.add('popup__text');
    textComponent.textContent = `${text}`;

    this.node.append(titleComponent, textComponent);
  }
}
