import { observer } from '../utils/observer';
import { store } from '../utils/stor';
import { API } from './api';

class GarageState {
  private api = new API();

  public updateCars = async (page: number) => {
    const { cars, count } = await this.api.getCars(page);

    store.cars = cars;
    store.carsCount = count;

    observer.notify('update garage');
  };
}

export const garageState = new GarageState();
