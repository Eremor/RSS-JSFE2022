import { currentCar } from '../../../../utils/stor';
import { BaseComponent } from '../../../baseComponent';
import { Form } from '../../../shared/form/form';
import { Control } from '../control/control';

export class Menu extends BaseComponent<HTMLDivElement> {
  private createCarForm = new Form(['form--create', 'garage__form'], 'create');

  private updateCarForm = new Form(['form--update', 'garage__form'], 'update');

  constructor() {
    super('div', ['garage__menu']);
  }

  public draw = () => {
    const { name, color } = currentCar;
    this.createCarForm.draw();
    this.createCarForm.textValue = name;
    this.createCarForm.colorValue = color;
    this.updateCarForm.draw();

    const control = new Control();
    control.draw();

    this.node.append(this.createCarForm.node, this.updateCarForm.node, control.node);

    this.createCarForm.onSubmit(this.createCar);
    this.updateCarForm.onSubmit(this.updateCar);

    this.node.addEventListener('input', this.changeForm);
  };

  private createCar = () => {
    console.log('create car');
  };

  private updateCar = () => {
    console.log('update car');
  };

  private changeForm = (e: Event) => {
    const target = <HTMLElement>e.target;
    const parent = <HTMLElement>target.parentElement;

    if (parent.classList.contains('form--create')) {
      currentCar.name = this.createCarForm.textValue;
      currentCar.color = this.createCarForm.colorValue;
    }
  };
}
