import { observer } from '../utils/observer';
import { store } from '../utils/stor';
import { API } from './api';

class GarageState {
  private api = new API();

  public updateCars = async (page: number): Promise<void> => {
    const { cars, count } = await this.api.getCars(page);

    store.cars = cars;
    store.carsCount = count;

    observer.notify('update garage');
  };

  public createCar = async (name: string, color: string): Promise<void> => {
    if (name.length > 0) {
      await this.api.createCar({ name, color });
    } else {
      throw new Error('Please provide a name for the car');
    }
    this.updateCars(store.garagePage);
  };

  public deleteCar = async (id: number): Promise<void> => {
    await this.api.deleteCar(id);
    this.updateCars(store.garagePage);
  };
}

export const garageState = new GarageState();
