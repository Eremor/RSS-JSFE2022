import { garageState } from '../../../services/garageState';
// import { observer } from '../../../utils/observer';
import { store } from '../../../utils/stor';
import { BaseComponent } from '../../baseComponent';
import { Button } from '../button/button';
import './pagination.scss';

export class Pagination extends BaseComponent<HTMLDivElement> {
  private pageNumber: number;

  private lastPage: number;

  private prevButton = new Button(['btn--primary'], 'Prev');

  private nextButton = new Button(['btn--primary'], 'Next');

  private elementPerPage: number;

  constructor(pageNumber: number, itemsCount: number, elementPerPage: number) {
    super('div', ['pagination']);
    this.pageNumber = pageNumber;
    this.elementPerPage = elementPerPage;
    this.lastPage = Math.ceil(itemsCount / elementPerPage);
  }

  public draw = (): void => {
    if (this.pageNumber <= 1) {
      this.disabledButton(this.prevButton.node);
    }

    if (this.pageNumber >= this.lastPage) {
      this.disabledButton(this.nextButton.node);
    }

    this.node.append(this.prevButton.node, this.nextButton.node);

    this.prevButton.onClick(this.moveToPrevPage);
    this.nextButton.onClick(this.moveToNextPage);
  };

  private moveToPrevPage = () => {
    if (this.pageNumber > 1) {
      this.activeButton(this.prevButton.node);
      this.pageNumber -= 1;
    } else {
      this.disabledButton(this.prevButton.node);
    }
    this.setPage(this.pageNumber);
    // observer.notify('update garage');
  };

  private moveToNextPage = () => {
    if (this.pageNumber < this.lastPage) {
      this.activeButton(this.nextButton.node);
      this.pageNumber += 1;
    } else {
      this.disabledButton(this.nextButton.node);
    }
    this.setPage(this.pageNumber);
    // observer.notify('update garage');
  };

  private activeButton = (button: HTMLButtonElement): void => {
    button.classList.remove('btn--disabled');
    button.setAttribute('disabled', 'false');
  };

  private disabledButton = (button: HTMLButtonElement): void => {
    button.classList.add('btn--disabled');
    button.setAttribute('disabled', 'true');
  };

  public setPage = (page: number): void => {
    if (this.elementPerPage === 7) {
      store.garagePage = page;
      garageState.updateCars(page);
    }
  };
}
