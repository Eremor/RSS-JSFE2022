import { garageState } from '../../../../services/garageState';
import { observer } from '../../../../utils/observer';
import { store } from '../../../../utils/stor';
import { BaseComponent } from '../../../baseComponent';
import { Form } from '../../../shared/form/form';
import { Control } from '../control/control';

export class Menu extends BaseComponent<HTMLDivElement> {
  private createCarForm = new Form(['form--create', 'garage__form'], 'create', store.newCar);

  private updateCarForm = new Form(['form--update', 'garage__form'], 'update', store.selectCar);

  constructor() {
    super('div', ['garage__menu']);
  }

  public draw = () => {
    this.createCarForm.draw();
    this.updateCarForm.draw();
    this.updateCarForm.isDisabled(store.isSelected);

    const control = new Control();
    control.draw();

    this.node.append(this.createCarForm.node, this.updateCarForm.node, control.node);

    this.createCarForm.onSubmit(this.createCar);
    this.updateCarForm.onSubmit(this.updateCar);

    observer.subscribe({
      action: 'update control race',
      callback: control.draw,
    });
  };

  private createCar = () => {
    const { name, color } = store.newCar;
    garageState.createCar(name, color);
    this.createCarForm.clear();
    observer.notify('update garage');
  };

  private updateCar = () => {
    garageState.updateCar(store.selectCar);
    store.isSelected = false;
    this.updateCarForm.clear();
  };
}
