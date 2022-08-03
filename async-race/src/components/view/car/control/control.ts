import { ICar } from '../../../../types/types';
import { garageState } from '../../../services/garageState';
import { observer } from '../../../utils/observer';
import { store } from '../../../utils/stor';
import { BaseComponent } from '../../baseComponent';
import { Button } from '../../shared/button/button';

export class CarControl extends BaseComponent<HTMLDivElement> {
  private name: string;

  private id: number;

  constructor(name: string, id: number) {
    super('div', ['car__control']);
    this.name = name;
    this.id = id;
  }

  public draw = (): void => {
    const selectButton = new Button(['btn--light', 'car__select', 'car__btn'], 'select');
    const removeButton = new Button(['btn--light', 'car__remove', 'car__btn'], 'remove');
    const carName = <HTMLHeadingElement>document.createElement('h4');
    carName.classList.add('car__name');
    carName.textContent = this.name;

    this.node.append(selectButton.node, removeButton.node, carName);

    selectButton.onClick(this.selectCar);
    removeButton.onClick(this.removeCar);
  };

  private selectCar = () => {
    const selectCar = <ICar>store.cars.find((car: ICar) => car.id === this.id);
    store.selectCar = selectCar;
    store.isSelected = true;
    observer.notify('update garage');
  };

  private removeCar = () => {
    garageState.deleteCar(this.id);
  };
}
