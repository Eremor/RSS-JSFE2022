export interface IRace {
  success: boolean;
  id: number;
  time: number;
}

export interface IDriving {
  velocity: number;
  distance: number;
}

export interface IPositionElement {
  x: number;
  y: number;
}

export type RaceType = {
  success: boolean;
};

export type AnimationType = {
  id: number;
};
