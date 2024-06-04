import { winnerState } from '../../../../../services/winnerState';
import { store } from '../../../../../utils/stor';
import { BaseComponent } from '../../../../baseComponent';
import { Button } from '../../../../shared/button/button';

export class HeaderTable extends BaseComponent<HTMLDivElement> {
  private winsButton = new Button(['table__col', 'table__col--bg', 'table__col--btn'], 'Wins');

  private bestTimeButton = new Button(
    ['table__col', 'table__col--bg', 'table__col--btn'],
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

    this.winsButton.node.dataset.sort = 'wins';
    this.bestTimeButton.node.dataset.sort = 'time';

    this.node.append(number, car, name, this.winsButton.node, this.bestTimeButton.node);

    this.winsButton.onClick(this.sortByWins);
    this.bestTimeButton.onClick(this.sortByTime);
    this.toggleClass(this.winsButton.node);
    this.toggleClass(this.bestTimeButton.node);
  };

  private sortByWins = (): void => {
    this.sortData(this.winsButton);
  };

  private sortByTime = (): void => {
    this.sortData(this.bestTimeButton);
  };

  private toggleClass = (button: HTMLElement): void => {
    this.removeClass(this.winsButton.node);
    this.removeClass(this.bestTimeButton.node);

    if (button.dataset.sort === store.sort.sortBy) {
      if (store.sort.isDuplicated) {
        button.classList.add('active-reverse');
      } else {
        button.classList.add('active');
      }
    }
  };

  private removeClass = (button: HTMLElement): void => {
    if (store.sort.sortBy !== button.dataset.sort) {
      if (store.sort.isDuplicated) {
        button.classList.remove('active');
      } else {
        button.classList.remove('active-reverse');
      }
    }
  };

  private sortData = (button: Button): void => {
    const sort = <string>button.node.dataset.sort;
    const isDouble = store.sort.isDuplicated;

    if (store.sort.sortBy === sort) {
      store.sort.isDuplicated = !isDouble;
      store.sort.order = 'DESC';
    } else {
      store.sort.sortBy = sort;
      store.sort.order = 'ASC';
      store.sort.isDuplicated = false;
    }

    if (isDouble) {
      store.sort.order = 'DESC';
    } else {
      store.sort.order = 'ASC';
    }

    this.toggleClass(button.node);
    winnerState.updateWinners();
  };
}
