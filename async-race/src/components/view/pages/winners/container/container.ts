import { store } from '../../../../utils/stor';
import { BaseComponent } from '../../../baseComponent';
import { SubTitle } from '../../../shared/heading/subtitle';
import { Title } from '../../../shared/heading/title';
import { Table } from '../table/table';

export class Container extends BaseComponent<HTMLDivElement> {
  constructor() {
    super('div', ['winners__body']);
  }

  public draw = (): void => {
    this.node.innerHTML = '';

    const title = new Title(`Winners (${store.winnersCount})`);
    const pageNumber = new SubTitle(`Page #${store.winnersPage}`);

    const table = new Table();
    table.draw();

    this.node.append(title.node, pageNumber.node, table.node);
  };
}
