import { filters } from '../../index';
import { ICard } from '../../interface/types';
import { Controller } from '../controller/controller';
import { Cards } from '../view/card/cards';
import { Chain } from '../view/chain/chain';
import { Footer } from '../view/footer/footer';
import { Header } from '../view/header/header';
import { Products } from '../view/products/products';
import { Sort } from '../view/sort/sort';

export class App {
  private rootElement: HTMLElement;
  private controller: Controller = new Controller();

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

    const sort: Sort = new Sort();
    sort.draw();

    const cards: Cards = new Cards();
    this.controller.getCards((data: ICard[]) => cards.draw(data as ICard[]));

    products.node.addEventListener('input', (e: Event) => {
      console.log(e.target);
      console.log(filters);
      this.controller.getCards((data: ICard[]) => cards.draw(data as ICard[]));
    });
  }
}
