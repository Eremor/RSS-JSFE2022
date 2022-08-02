import { observer } from '../utils/observer';
import { store } from '../utils/stor';
import { API } from './api';

export class GarageState {
  private api = new API();

  public updateCars = async () => {
    const { cars, count } = await this.api.getCars(store.garagePage);

    store.cars = cars;
    store.carsCount = count;

    observer.notify('update garage');
  };
}
