import { filters } from '../../index';
import { Chain } from '../view/chain/chain';
import { Footer } from '../view/footer/footer';
import { Header } from '../view/header/header';
import { Products } from '../view/products/products';
import { Sort } from '../view/sort/sort';

export class App {
  private rootElement: HTMLElement;

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

    const footer = new Footer();
    footer.draw();

    main.append(chain.node, products.node);
    this.rootElement.append(header.node, main, footer.node);

    const sort = new Sort();
    sort.draw();

    products.node.addEventListener('change', (e: Event) => {
      console.log(e.target);
      console.log(filters);
    });
  }
}
