import { AnimationType, IPositionElement, IRace } from '../../types/irace';
import { DistanceType, ICar } from '../../types/types';
import { store } from '../utils/stor';
import { API } from './api';
import { winnerState } from './winnerState';

class RaceState {
  private api = new API();

  public startEngine = async (id: number): Promise<IRace> => {
    const { car, flag } = this.getRoad(id);
    const { distance, velocity } = await this.api.startCarEngine(id);
    const time: number = Math.floor(distance / velocity);

    const raceDistance = Math.floor(this.getRaceDistance(car, flag)) + 40;
    store.animation[id] = this.animation(car, raceDistance, time);

    const { success } = await this.api.race(id);
    if (!success) window.cancelAnimationFrame(store.animation[id].id);

    return { success, id, time };
  };

  public stopEngine = async (id: number): Promise<void> => {
    const { car } = this.getRoad(id);

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

  private getPosition = (element: HTMLElement): IPositionElement => {
    const { top, left, width, height } = element.getBoundingClientRect();

    return {
      x: left + width / 2,
      y: top + height / 2,
    };
  };

  private getRaceDistance = (startElement: HTMLElement, finishElement: HTMLElement): number => {
    const startPosition: IPositionElement = this.getPosition(startElement);
    const finishPosition: IPositionElement = this.getPosition(finishElement);

    return Math.hypot(startPosition.x - finishPosition.x, startPosition.y - finishPosition.y);
  };

  private animation = (
    car: HTMLElement,
    distance: number,
    animationTime: number,
  ): AnimationType => {
    let start: number | null = null;
    const state: AnimationType = { id: 0 };

    const stepAnimation = (timestamp: number) => {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const passedDistance = Math.round(time * (distance / animationTime));

      const transform = `transform: translate(${Math.min(passedDistance, distance)}px)`;
      car.setAttribute('style', `${transform}`);

      if (passedDistance < distance) {
        state.id = window.requestAnimationFrame(stepAnimation);
      }
    };

    state.id = window.requestAnimationFrame(stepAnimation);

    return state;
  };

  private getRoad = (id: number): DistanceType => {
    const carItem = <HTMLElement>store.carsAtRace.find((car: HTMLElement) => +car.id === id);

    const road = <HTMLDivElement>carItem.children[1];

    const car = <HTMLElement>road.children[1];
    const flag = <HTMLElement>road.children[2];

    return { car, flag };
  };
}

export const raceState = new RaceState();
