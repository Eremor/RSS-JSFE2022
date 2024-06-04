import { ICar } from '../../../types/types';
import { BaseComponent } from '../baseComponent';
import { CarControl } from './control/control';
import { Road } from './road/road';
import './car.scss';

export class Car extends BaseComponent<HTMLLIElement> {
  private carName: string;

  private carColor: string;

  private carId: number;

  constructor(carProp: ICar) {
    super('li', ['garage__car', 'car']);
    this.carName = carProp.name;
    this.carColor = carProp.color;
    this.carId = <number>carProp.id;

    this.node.id = `${this.carId}`;
  }

  public draw = () => {
    const control = new CarControl(this.carName, this.carId);
    control.draw();

    const road = new Road(this.carColor, this.carId);
    road.draw();

    this.node.append(control.node, road.node);
  };
}
