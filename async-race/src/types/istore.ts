import { AnimationType } from './irace';
import { IWinner, WinnerType } from './iwinner';
import { ICar } from './types';

type SortType = {
  sortBy: string;
  order: string;
  isDuplicated: boolean;
};

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
  winnersPage: number;
  winners: IWinner[];
  winnersCount: number;
  newWinner: WinnerType;
  findWinnerCar: ICar;
  sort: SortType;
}
