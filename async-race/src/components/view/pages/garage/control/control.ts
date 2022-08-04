import { garageState } from '../../../../services/garageState';
import { raceState } from '../../../../services/raceState';
import { store } from '../../../../utils/stor';
import { BaseComponent } from '../../../baseComponent';
import { Button } from '../../../shared/button/button';

export class Control extends BaseComponent<HTMLDivElement> {
  private startRaceButton: Button = new Button(['btn--primary'], 'race');

  private resetRaceButton: Button = new Button(['btn--primary', 'btn--disabled'], 'reset');

  private generateCarsButton: Button = new Button(['btn--light'], 'generate cars');

  constructor() {
    super('div', ['garage__control']);
  }

  public draw = () => {
    this.node.append(
      this.startRaceButton.node,
      this.resetRaceButton.node,
      this.generateCarsButton.node,
    );

    this.resetRaceButton.node.disabled = true;

    this.startRaceButton.onClick(this.startRace);
    this.resetRaceButton.onClick(this.resetRace);
    this.generateCarsButton.onClick(this.generateCars);
  };

  private startRace = () => {
    store.isRace = true;
    this.isDisabled(store.isRace);
    raceState.race();
  };

  private resetRace = () => {
    store.isRace = false;
    this.isDisabled(store.isRace);
    raceState.resetRace();
  };

  private isDisabled = (isActive: boolean): void => {
    if (isActive) {
      this.disabledButton(this.startRaceButton.node);
      this.activeButton(this.resetRaceButton.node);
    } else {
      this.activeButton(this.startRaceButton.node);
      this.disabledButton(this.resetRaceButton.node);
    }
  };

  private disabledButton = (button: HTMLButtonElement): void => {
    button.classList.add('btn--disabled');
    button.setAttribute('disabled', 'true');
  };

  private activeButton = (button: HTMLButtonElement): void => {
    button.classList.remove('btn--disabled');
    button.removeAttribute('disabled');
  };

  private generateCars = (): void => {
    garageState.generateCars();
  };
}
