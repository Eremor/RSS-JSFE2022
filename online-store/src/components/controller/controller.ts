import { ICard } from '../../interface/types';
import { Loader } from './loader';

export class Controller extends Loader {
  public getCards(callback: (data: ICard[]) => void): void {
    super.getRes(callback);
  }
}
