export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export type ResponseWinnerType = {
  winner: IWinner;
  status: number;
};

export type WinnerType = {
  name: string;
  time: number;
};

export interface IWinnerItem extends IWinner {
  position: number;
  color: string;
  name: string;
}

export type GetWinnersType = {
  winners: IWinner[];
  count: number;
};
