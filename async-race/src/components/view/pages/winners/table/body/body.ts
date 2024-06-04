import { IWinner, IWinnerItem } from '../../../../../../types/iwinner';
import { winnerState } from '../../../../../services/winnerState';
import { store } from '../../../../../utils/stor';
import { BaseComponent } from '../../../../baseComponent';
import { WinnerItem } from '../../winner-item/winner-item';

export class BodyTable extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('ul', ['table__body']);
  }

  public draw = (): void => {
    this.node.innerHTML = '';

    this.drawWinners(this.node);
  };

  private drawWinners = (parent: HTMLElement): void => {
    store.winners.forEach(async (winner: IWinner, i: number) => {
      const { id, time, wins } = winner;
      await winnerState.findWinnerCar(id);
      const { name, color } = store.findWinnerCar;
      const position = i + 1 + (store.winnersPage - 1) * 10;

      const winnerValue: IWinnerItem = {
        id,
        position,
        color,
        name,
        time,
        wins,
      };

      const winnerItem = new WinnerItem(winnerValue);
      winnerItem.draw();

      parent.append(winnerItem.node);
    });
  };
}
