import { ICar } from './types';

export interface IStore {
  garagePage: number;
  cars: ICar[];
  carsCount: number;
  newCar: ICar;
  selectCar: ICar;
  isSelected: boolean;
}
