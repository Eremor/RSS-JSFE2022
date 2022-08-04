import { IDriving, RaceType } from '../../types/irace';
import { GetCarsType, ICar } from '../../types/types';

export class API {
  private baseURL = 'http://127.0.0.1:3000';

  private garage = `${this.baseURL}/garage`;

  // private winners = `${this.baseURL}/winners`;

  private engine = `${this.baseURL}/engine`;

  public getCars = async (page: number, limit = 7): Promise<GetCarsType> => {
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
}
