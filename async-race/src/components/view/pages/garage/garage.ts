import { BaseComponent } from '../../baseComponent';
import { Form } from '../../form/form';
import { Button } from '../../shared/button/button';
import { SubTitle } from '../../shared/heading/subtitle';
import { Title } from '../../shared/heading/title';
import './garage.scss';

export class GaragePage extends BaseComponent<HTMLElement> {
  constructor() {
    super('section', ['garage']);
  }

  public draw = (): void => {
    this.node.innerHTML = '';

    const menuContainer: HTMLDivElement = document.createElement('div');
    menuContainer.classList.add('garage__menu');

    const createCarForm: Form = new Form(['garage__form'], 'create');
    createCarForm.draw();

    const updateCarForm: Form = new Form(['garage__form'], 'update');
    updateCarForm.draw();

    const raceController: HTMLDivElement = document.createElement('div');
    raceController.classList.add('garage__control');

    const startRaceButton: Button = new Button(['btn--primary'], 'race');

    const resetRaceButton: Button = new Button(['btn--primary', 'btn--disabled'], 'reset');

    const generateCarsButton: Button = new Button(['btn--light'], 'generate cars');

    raceController.append(startRaceButton.node, resetRaceButton.node, generateCarsButton.node);
    menuContainer.append(createCarForm.node, updateCarForm.node, raceController);

    const body: HTMLDivElement = document.createElement('div');
    body.classList.add('garage__body');

    const garageTitle: Title = new Title('Garage (4)');
    const garagePageTitle: SubTitle = new SubTitle('Page #1');

    body.append(garageTitle.node, garagePageTitle.node);
    this.node.append(menuContainer, body);
  };
}
