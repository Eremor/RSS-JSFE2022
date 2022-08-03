import { CarImage } from '../components/view/car/car-image/image';

export interface IRout {
  name: string;
  onDraw: () => void;
}

export interface IObserver {
  action: string;
  callback: () => void;
}

export interface ICar {
  name: string;
  color: string;
  id?: number;
}

export type GetCarsType = {
  cars: ICar[];
  count: number;
};

export type DistanceType = {
  car: HTMLElement;
  flag: HTMLElement;
};
