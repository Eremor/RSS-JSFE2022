import { BaseComponent } from '../baseComponent';

export class GaragePage extends BaseComponent<HTMLElement> {
  constructor() {
    super('section', ['garage']);
  }

  public draw = (): void => {
    const title: HTMLElement = document.createElement('h2');
    title.textContent = 'Garage page';

    this.node.append(title);
  };
}
