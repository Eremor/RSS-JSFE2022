import { IWinnerItem } from '../../../../../types/iwinner';
import { BaseComponent } from '../../../baseComponent';
import { CarImage } from '../../../car/car-image/image';

export class WinnerItem extends BaseComponent<HTMLLIElement> {
  constructor(private readonly winner: IWinnerItem) {
    super('li', ['table__row']);
  }

  public draw = (): void => {
    const { id, position, color, name, wins, time } = this.winner;

    this.node.setAttribute('id', `${id}`);

    const number = <HTMLSpanElement>document.createElement('span');
    number.classList.add('table__col', 'table__col--number');
    number.textContent = `${position}`;

    const image = new CarImage(color);
    image.node.classList.remove('car__image');
    image.node.classList.add('table__col', 'table__col--car');

    const carName = <HTMLSpanElement>document.createElement('span');
    carName.classList.add('table__col', 'table__col--name');
    carName.textContent = name;

    const count = <HTMLSpanElement>document.createElement('span');
    count.classList.add('table__col', 'table__col--wins');
    count.textContent = `${wins}`;

    const bestTime = <HTMLSpanElement>document.createElement('span');
    bestTime.classList.add('table__col', 'table__col--score');
    bestTime.textContent = `${time}`;

    this.node.append(number, image.node, carName, count, bestTime);
  };
}
