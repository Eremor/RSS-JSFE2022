import { BaseComponent } from '../../baseComponent';
import { Button } from '../../shared/button/button';

export class CarControl extends BaseComponent<HTMLDivElement> {
  private name: string;

  constructor(name: string) {
    super('div', ['car__control']);
    this.name = name;
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
    console.log(this.node);
  };

  private removeCar = () => {
    console.log(this.node);
  };
}
