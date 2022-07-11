import { Header } from '../view/header/header';

export class App {
  private rootElement: HTMLElement;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
  }

  public start(): void {
    const header: Header = new Header();
    header.draw();

    this.rootElement.append(header.node);
  }
}
