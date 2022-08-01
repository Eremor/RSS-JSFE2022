export interface IRout {
  name: string;
  onDraw: () => void;
}

export interface IObserver {
  action: string;
  callback: () => void;
}

export interface IStore {
  garagePage: number;
  cars: ICar[];
  carsCount: number;
}

export interface ICar {
  name: string;
  color: string;
  id?: number;
}
