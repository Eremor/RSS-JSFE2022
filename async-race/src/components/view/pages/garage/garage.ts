import { BaseComponent } from '../../baseComponent';
import { Body } from './body/body';
import { Menu } from './menu/menu';
import { Pagination } from '../../shared/pagination/pagination';
import { store } from '../../../utils/stor';
import './garage.scss';

export class GaragePage extends BaseComponent<HTMLElement> {
  constructor() {
    super('section', ['garage']);
  }

  public draw = (): void => {
    this.node.innerHTML = '';

    const menu = new Menu();
    menu.draw();
    const body = new Body();
    body.draw();
    const pagination = new Pagination(store.garagePage, store.carsCount, 7);
    pagination.draw();

    this.node.append(menu.node, body.node, pagination.node);
  };
}
