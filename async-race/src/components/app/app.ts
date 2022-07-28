import { IRout } from '../../types/types';
import { Router } from '../controller/router';
import { getRouting } from '../utils/routing';
import { Header } from '../view/header/header';
import { GaragePage } from '../view/pages/garage';
import { WinnersPage } from '../view/pages/winners';

export class App {
  private rootElement: HTMLElement;

  private garage = new GaragePage();

  private winners = new WinnersPage();

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
  }

  public start = (): void => {
    const header: Header = new Header();
    header.draw();

    const main: HTMLElement = document.createElement('main');

    const routingNames: string[] = ['', 'garage', 'winners'];
    const routingCallbacks = [
      () => this.drawGaragePage(main),
      () => this.drawGaragePage(main),
      () => this.drawWinnersPage(main),
    ];
    const routing: IRout[] = getRouting(routingNames, routingCallbacks);

    const router: Router = new Router(main, routing);
    router.changeRout();

    this.rootElement.append(header.node, main);
  };

  private drawGaragePage = (parentElement: HTMLElement): void => {
    this.garage.draw();
    parentElement.append(this.garage.node);
  };

  private drawWinnersPage = (parentElement: HTMLElement): void => {
    this.winners.draw();
    parentElement.append(this.winners.node);
  };
}
