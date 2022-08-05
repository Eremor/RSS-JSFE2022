import { AnimationType } from './irace';
import { WinnerType } from './iwinner';
import { ICar } from './types';

export interface IStore {
  garagePage: number;
  cars: ICar[];
  carsCount: number;
  newCar: ICar;
  selectCar: ICar;
  isSelected: boolean;
  isActiveEngine: boolean;
  isRace: boolean;
  isFinish: boolean;
  animation: AnimationType[];
  carsAtRace: HTMLElement[];
  newWinner: WinnerType;
}
