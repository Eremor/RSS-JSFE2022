import { IStore } from '../../types/istore';

export const store: IStore = {
  garagePage: 1,
  cars: [],
  carsCount: 4,
  newCar: {
    name: '',
    color: '#ffffff',
  },
  selectCar: {
    name: '',
    color: '#ffffff',
  },
  isSelected: false,
  isActiveEngine: false,
  isRace: false,
  isFinish: false,
  animation: [],
  carsAtRace: [],
  newWinner: {
    name: '',
    time: 0,
  },
};
