import { BaseComponent } from '../../baseComponent';
import { CarImage } from '../car-image/image';
import { Engine } from '../engine/engine';
import './road.scss';

export class Road extends BaseComponent<HTMLDivElement> {
  private color: string;

  private id: number;

  constructor(color: string, id: number) {
    super('div', ['road']);
    this.color = color;
    this.id = id;
  }

  public draw = (): void => {
    const car = new CarImage(this.color);

    const flag = <HTMLDivElement>document.createElement('div');
    flag.classList.add('road__flag');

    const engine = new Engine(this.id);
    engine.draw();

    this.node.append(engine.node, car.node, flag);
  };
}
