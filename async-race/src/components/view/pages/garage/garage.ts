import { BaseComponent } from '../../baseComponent';
import { SubTitle } from '../../shared/heading/subtitle';
import { Title } from '../../shared/heading/title';
import './garage.scss';
import { Menu } from './menu/menu';

export class GaragePage extends BaseComponent<HTMLElement> {
  constructor() {
    super('section', ['garage']);
  }

  public draw = (): void => {
    this.node.innerHTML = '';

    const menu = new Menu();
    menu.draw();

    const body: HTMLDivElement = document.createElement('div');
    body.classList.add('garage__body');

    const garageTitle: Title = new Title('Garage (4)');
    const garagePageTitle: SubTitle = new SubTitle('Page #1');

    body.append(garageTitle.node, garagePageTitle.node);
    this.node.append(menu.node, body);
  };
}
