import { BaseComponent } from '../../baseComponent';
import { Body } from './body/body';
import { Menu } from './menu/menu';
import './garage.scss';
import { observer } from '../../../utils/observer';
import { GarageState } from '../../../services/garageState';

export class GaragePage extends BaseComponent<HTMLElement> {
  private state = new GarageState();

  constructor() {
    super('section', ['garage']);
  }

  public draw = (): void => {
    this.node.innerHTML = '';

    const menu = new Menu();
    menu.draw();
    const body = new Body();
    body.draw();

    observer.subscribe({
      action: 'update garage',
      callback: body.draw,
    });

    this.node.append(menu.node, body.node);

    this.state.updateCars();
  };
}
