import { BaseComponent } from '../../../../baseComponent';
import { Button } from '../../../../shared/button/button';

export class HeaderTable extends BaseComponent<HTMLDivElement> {
  private winsButton = new Button(
    ['table__col', 'table__col--bg', 'table__col--btn', 'active'],
    'Wins',
  );

  private bestTimeButton = new Button(
    ['table__col', 'table__col--bg', 'table__col--btn', 'active-reverse'],
    'Best time (seconds)',
  );

  constructor() {
    super('div', ['table__header']);
  }

  public draw = (): void => {
    const number = <HTMLParagraphElement>document.createElement('p');
    number.classList.add('table__col', 'table__col--bg');
    number.textContent = 'Number';

    const car = <HTMLParagraphElement>document.createElement('p');
    car.classList.add('table__col', 'table__col--bg');
    car.textContent = 'Car';

    const name = <HTMLParagraphElement>document.createElement('p');
    name.classList.add('table__col', 'table__col--bg');
    name.textContent = 'Name';

    this.node.append(number, car, name, this.winsButton.node, this.bestTimeButton.node);

    this.winsButton.onClick(this.sortByWins);
    this.bestTimeButton.onClick(this.sortByTime);
  };

  private sortByWins = (): void => {
    console.log('sort by wins');
  };

  private sortByTime = (): void => {
    console.log('sort by best time');
  };
}
