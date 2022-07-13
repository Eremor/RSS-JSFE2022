import { ICard } from '../../interface/types';

export class Loader {
  private urlToSources = './products.json';

  public getRes(callback: (data: ICard[]) => void = () => console.error('No callback for response')): void {
    this.load(this.urlToSources, callback);
  }

  private errorHandler = (res: Response): Response => {
    if (!res.ok) {
      if (res.status === 404) {
        console.error(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      }
      throw Error(res.statusText);
    }

    return res;
  };

  private load = (url: string, callback: (data: ICard[]) => void): void => {
    fetch(url)
      .then(this.errorHandler)
      .then((res: Response) => res.json())
      .then((data: ICard[]) => callback(data))
      .catch((err: Error) => console.error(err));
  };
}
