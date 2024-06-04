import { IRace } from '../../types/irace';
import { ICar } from '../../types/types';
import { observer } from '../utils/observer';
import { store } from '../utils/stor';
import { API } from './api';

class WinnerState {
  private api = new API();

  public findWinner = async (winner: IRace): Promise<void> => {
    const { id, time } = winner;
    const formattedTime = +(time / 1000).toFixed(2);

    await this.saveWinner(id, formattedTime);
    await this.showWinner(id, formattedTime);
    await this.updateWinners();
  };

  private saveWinner = async (id: number, time: number): Promise<void> => {
    const { winner, status } = await this.api.getWinner(id);

    if (status === 404) {
      console.error(`Car with id="${id}", won first time`);
      await this.api.createWinner({ id, time, wins: 1 });
    } else {
      await this.api.updateWinner({
        id: winner.id,
        wins: (winner.wins += 1),
        time: time < winner.time ? time : winner.time,
      });
    }
  };

  private showWinner = async (id: number, time: number): Promise<void> => {
    const winnerCar = <ICar>store.cars.find((car: ICar) => <number>car.id === id);

    store.newWinner = {
      name: winnerCar.name,
      time,
    };

    observer.notify('show winner');
    store.isFinish = true;
    observer.notify('update control race');
  };

  public findWinnerCar = async (id: number): Promise<void> => {
    const car: ICar = await this.api.getCar(id);
    store.findWinnerCar = car;
  };

  public updateWinners = async (): Promise<void> => {
    const { sortBy, order } = store.sort;
    const { winners, count } = await this.api.getWinners(store.winnersPage, sortBy, order);

    store.winners = winners;
    store.winnersCount = count;

    observer.notify('update winners');
  };

  public deleteWinner = async (id: number): Promise<void> => {
    await this.api.deleteWinner(id);
    this.updateWinners();
  };
}

export const winnerState = new WinnerState();
