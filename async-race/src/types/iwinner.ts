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
