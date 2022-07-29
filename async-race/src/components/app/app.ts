import { IRout } from '../../types/types';
import { Router } from '../controller/router';
import { getRouting } from '../utils/routing';
import { Header } from '../view/header/header';
import { GaragePage } from '../view/pages/garage/garage';
import { WinnersPage } from '../view/pages/winners/winners';

export class App {
  private readonly rootElement: HTMLElement;

  private readonly garage = new GaragePage();

  private readonly winners = new WinnersPage();

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
  }

  public start = (): void => {
    const header: Header = new Header();
    header.draw();

    const main: HTMLElement = document.createElement('main');

    const routingNames: string[] = ['', 'garage', 'winners'];
    const routingCallbacks: Array<() => void> = [
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
