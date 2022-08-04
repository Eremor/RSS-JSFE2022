import { ICar } from '../../types/types';
import { observer } from '../utils/observer';
import { store } from '../utils/stor';
import { generateRandomCars } from '../utils/utils';
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

  public updateCar = async (car: ICar): Promise<void> => {
    await this.api.updateCar(car);
    this.updateCars(store.garagePage);
  };

  public generateCars = async (): Promise<void> => {
    const newCars: ICar[] = generateRandomCars(100);
    newCars.forEach((newCar: ICar) => {
      const { name, color } = newCar;
      this.createCar(name, color);
    });
    this.updateCars(store.garagePage);
  };
}

export const garageState = new GarageState();
