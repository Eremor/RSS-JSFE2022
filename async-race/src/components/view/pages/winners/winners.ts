import { store } from '../../../utils/stor';
import { BaseComponent } from '../../baseComponent';
import { Pagination } from '../../shared/pagination/pagination';
import { Container } from './container/container';
import './winners.scss';

export class WinnersPage extends BaseComponent<HTMLElement> {
  constructor() {
    super('section', ['winners']);
  }

  public draw = (): void => {
    this.node.innerHTML = '';

    const container = new Container();
    container.draw();

    const pagination = new Pagination(store.winnersPage, store.winnersCount, 10);
    pagination.draw();

    this.node.append(container.node, pagination.node);
  };
}
