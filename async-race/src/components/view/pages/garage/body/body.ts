import { ICar } from '../../../../../types/types';
import { store } from '../../../../utils/stor';
import { BaseComponent } from '../../../baseComponent';
import { Car } from '../../../car/car';
import { SubTitle } from '../../../shared/heading/subtitle';
import { Title } from '../../../shared/heading/title';

export class Body extends BaseComponent<HTMLDivElement> {
  constructor() {
    super('div', ['garage__body']);
  }

  public draw = (): void => {
    this.node.innerHTML = '';

    const title = new Title(`Garage (${store.carsCount})`);
    const pageNumber = new SubTitle(`Page #${store.garagePage}`);

    const garageList = <HTMLUListElement>document.createElement('ul');
    garageList.classList.add('garage__list');
    garageList.innerHTML = '';

    this.drawCars(garageList);

    this.node.append(title.node, pageNumber.node, garageList);
  };

  private drawCars = (parent: HTMLElement): void => {
    store.cars.forEach((car: ICar) => {
      const carItem = new Car(car);
      carItem.draw();

      store.carsAtRace.push(carItem.node);
      parent.append(carItem.node);
    });
  };
}
