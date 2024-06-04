import { BaseComponent } from '../baseComponent';
import { RouterLink } from '../router-link/routerLink';
import './header.scss';

export class Header extends BaseComponent<HTMLElement> {
  constructor() {
    super('header', ['header']);
  }

  public draw = (): void => {
    const garageLink: RouterLink = new RouterLink('To garage', 'garage');
    const winnersLink: RouterLink = new RouterLink('To winners', 'winners');

    this.node.append(garageLink.node, winnersLink.node);
  };
}
