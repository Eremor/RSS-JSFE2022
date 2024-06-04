import { Link } from '../../shared/link';
import { Wrapper } from '../../shared/wrapper';
import { BaseComponent } from '../baseComponent';
import { Cart } from '../cart/cart';
import './header.scss';

export class Header extends BaseComponent {
  private readonly links: string[] = ['home', 'about', 'products'];

  constructor() {
    super('header', ['header']);
  }

  public draw = (): void => {
    const wrapper: Wrapper = new Wrapper(['header__wrapper']);

    const logo: Link = new Link(['header__logo', 'logo'], 'MyKEA', '#');

    const nav: HTMLElement = document.createElement('nav');
    nav.classList.add('header__nav', 'nav');

    this.links.forEach((link: string): void => {
      const navLink: Link = new Link(['nav__link'], link, '#');
      nav.append(navLink.node);
    });

    const cart: Cart = new Cart(['header__cart']);
    cart.draw('Cart');

    wrapper.node.append(logo.node, nav, cart.node);
    this.node.append(wrapper.node);
  };
}
