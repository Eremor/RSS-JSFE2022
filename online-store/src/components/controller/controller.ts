import { ICard } from '../../interface/types';
import { Filters } from './filters';
import { Loader } from './loader';

export class Controller extends Loader {
  public getCards(callback: (data: ICard[]) => void): void {
    super.getRes(callback);
  }

  public filters(data: ICard[]): ICard[] {
    const filters = new Filters(data);
    return filters.getData();
  }
}
