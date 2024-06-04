import { IDriving, RaceType } from '../../types/irace';
import { GetWinnersType, IWinner, ResponseWinnerType } from '../../types/iwinner';
import { GetCarsType, ICar } from '../../types/types';
import { CARS_PER_PAGE, WINNERS_PER_PAGE } from '../utils/constants';

export class API {
  private baseURL = 'http://127.0.0.1:3000';

  private garage = `${this.baseURL}/garage`;

  private winners = `${this.baseURL}/winners`;

  private engine = `${this.baseURL}/engine`;

  public getCars = async (page: number, limit = CARS_PER_PAGE): Promise<GetCarsType> => {
    const res = await fetch(`${this.garage}?_page=${page}&_limit=${limit}`);

    return {
      cars: await res.json(),
      count: +(<string>res.headers.get('X-Total-Count')),
    };
  };

  public getCar = async (id: number): Promise<ICar> => {
    const res = await fetch(`${this.garage}/${id}`);

    return res.json();
  };

  public createCar = async (car: ICar): Promise<void> => {
    (
      await fetch(this.garage, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  };

  public deleteCar = async (id: number): Promise<void> => {
    (
      await fetch(`${this.garage}/${id}`, {
        method: 'DELETE',
      })
    ).json();
  };

  public updateCar = async (car: ICar): Promise<void> => {
    const id = <number>car.id;
    (
      await fetch(`${this.garage}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  };

  public startCarEngine = async (id: number): Promise<IDriving> => {
    const urlRequest = `${this.engine}?id=${id}&status=started`;
    const res = await fetch(urlRequest, {
      method: 'PATCH',
    });
    return res.json();
  };

  public stopCarEngine = async (id: number): Promise<void> => {
    const urlRequest = `${this.engine}?id=${id}&status=stopped`;
    await fetch(urlRequest, {
      method: 'PATCH',
    });
  };

  public race = async (id: number): Promise<RaceType> => {
    const urlRequest = `${this.engine}?id=${id}&status=drive`;
    const res: Response = await fetch(urlRequest, {
      method: 'PATCH',
    });

    if (res.status === 500) console.error(`Oops!! The car with id="${id}" has a broken engine`);

    return res.status !== 200 ? { success: false } : { success: true };
  };

  public createWinner = async (winner: IWinner): Promise<void> => {
    await fetch(this.winners, {
      method: 'POST',
      body: JSON.stringify(winner),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  public updateWinner = async (winner: IWinner): Promise<void> => {
    const { id } = winner;
    const requestUrl = `${this.winners}/${id}`;
    await fetch(requestUrl, {
      method: 'PUT',
      body: JSON.stringify(winner),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  public getWinner = async (id: number): Promise<ResponseWinnerType> => {
    const res = await fetch(`${this.winners}/${id}`);

    const winner: IWinner = await res.json();
    const { status } = res;
    return { winner, status };
  };

  public getWinners = async (
    page: number,
    sort: string,
    order: string,
    limit = WINNERS_PER_PAGE,
  ): Promise<GetWinnersType> => {
    const requestUrl = `${this.winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
    const res = await fetch(requestUrl, {
      method: 'GET',
    });

    return {
      winners: await res.json(),
      count: +(<string>res.headers.get('X-Total-Count')),
    };
  };

  public deleteWinner = async (id: number): Promise<void> => {
    const { status } = await this.getWinner(id);

    if (status === 200) {
      await fetch(`${this.winners}/${id}`, {
        method: 'DELETE',
      });
    }
  };
}
