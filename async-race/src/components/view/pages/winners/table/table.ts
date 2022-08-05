import { BaseComponent } from '../../../baseComponent';
import { BodyTable } from './body/body';
import { HeaderTable } from './header/header';
import './table.scss';

export class Table extends BaseComponent<HTMLDivElement> {
  constructor() {
    super('div', ['winners__table', 'table']);
  }

  public draw = (): void => {
    const header = new HeaderTable();
    header.draw();

    const body = new BodyTable();
    body.draw();

    this.node.append(header.node, body.node);
  };
}
