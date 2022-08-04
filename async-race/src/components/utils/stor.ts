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
  animation: [],
  carsAtRace: [],
};
