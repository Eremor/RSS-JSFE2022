import { IRace } from '../../types/irace';
import { ICar } from '../../types/types';
import { store } from '../utils/stor';
import { animation, getRaceDistance, getRoad } from '../utils/utils';
import { API } from './api';
import { winnerState } from './winnerState';

class RaceState {
  private api = new API();

  public startEngine = async (id: number): Promise<IRace> => {
    const { car, flag } = getRoad(id);
    const { distance, velocity } = await this.api.startCarEngine(id);
    const time: number = Math.floor(distance / velocity);

    const raceDistance = Math.floor(getRaceDistance(car, flag)) + 40;
    store.animation[id] = animation(car, raceDistance, time);

    const { success } = await this.api.race(id);
    if (!success) window.cancelAnimationFrame(store.animation[id].id);

    return { success, id, time };
  };

  public stopEngine = async (id: number): Promise<void> => {
    const { car } = getRoad(id);

    await this.api.stopCarEngine(id);

    const transform = `transform: translate(0)`;
    car.setAttribute('style', `${transform}`);

    if (store.animation[id]) {
      window.cancelAnimationFrame(store.animation[id].id);
    }
  };

  public race = async (): Promise<void> => {
    Promise.all(store.cars)
      .then((response: ICar[]) => {
        const promises: Promise<IRace>[] = response.map((car: ICar) =>
          this.startEngine(<number>car.id),
        );

        return promises;
      })
      .then((response: Promise<IRace>[]) => {
        this.decideWinner(response);
      })
      .catch((err: string) => new Error(err));
  };

  private decideWinner = async (raceArray: Promise<IRace>[]): Promise<void> => {
    Promise.all(raceArray)
      .then((res: IRace[]) => {
        const winner = res
          .filter((data: IRace) => data.success)
          .sort((a: IRace, b: IRace) => a.time - b.time)[0];
        return winner;
      })
      .then((data: IRace) => {
        winnerState.findWinner(data);
      });
  };

  public resetRace = async (): Promise<void> => {
    Promise.all(store.cars).then((response: ICar[]) => {
      response.forEach((res: ICar) => this.stopEngine(<number>res.id));
    });
  };
}

export const raceState = new RaceState();
