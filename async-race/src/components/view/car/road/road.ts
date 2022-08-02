import { BaseComponent } from '../../baseComponent';
import { CarImage } from '../car-image/image';
import { Engine } from '../engine/engine';
import './road.scss';

export class Road extends BaseComponent<HTMLDivElement> {
  private color: string;

  constructor(color: string) {
    super('div', ['road']);
    this.color = color;
  }

  public draw = (): void => {
    const engine = new Engine();
    engine.draw();

    const car = new CarImage(this.color);

    const flag = <HTMLDivElement>document.createElement('div');
    flag.classList.add('road__flag');

    this.node.append(engine.node, car.node, flag);
  };
}
