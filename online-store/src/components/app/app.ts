import { Controller } from '../controller/controller';
import { View } from '../view/appView';
import { Chain } from '../view/chain/chain';
import { Footer } from '../view/footer/footer';
import { Header } from '../view/header/header';
import { Products } from '../view/products/products';

export class App {
  private rootElement: HTMLElement;
  private controller: Controller = new Controller();
  private view: View = new View();

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
  }

  public start(): void {
    const header: Header = new Header();
    header.draw();

    const main: HTMLElement = document.createElement('main');

    const chain: Chain = new Chain();
    chain.draw();

    const products: Products = new Products();
    products.draw();

    const footer: Footer = new Footer();
    footer.draw();

    main.append(chain.node, products.node);
    this.rootElement.append(header.node, main, footer.node);

    this.view.draw(this.controller, products.node);

    products.node.addEventListener('input', () => {
      this.view.draw(this.controller, products.node);
    });
  }
}
