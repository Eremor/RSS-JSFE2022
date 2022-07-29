export interface IRout {
  name: string;
  onDraw: () => void;
}

export interface IObserver {
  action: string;
  callback: () => void;
}
