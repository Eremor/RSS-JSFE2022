import { GetCarsType } from '../../types/types';

export class API {
  private baseURL = 'http://127.0.0.1:3000';

  private garage = `${this.baseURL}/garage`;

  // private winners = `${this.baseURL}/winners`;

  public getCars = async (page: number, limit = 7): Promise<GetCarsType> => {
    const res = await fetch(`${this.garage}?_page=${page}&_limit=${limit}`);

    return {
      cars: await res.json(),
      count: +(<string>res.headers.get('X-Total-Count')),
    };
  };
}
