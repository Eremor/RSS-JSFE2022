import { BaseComponent } from '../baseComponent';

export class WinnersPage extends BaseComponent<HTMLElement> {
  constructor() {
    super('section', ['winners']);
  }

  public draw = (): void => {
    const title: HTMLElement = document.createElement('h2');
    title.textContent = 'Winners page';

    this.node.append(title);
  };
}
