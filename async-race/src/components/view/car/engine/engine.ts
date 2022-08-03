import { DistanceType } from '../../../../types/types';
import { raceState } from '../../../services/raceState';
import { store } from '../../../utils/stor';
import { BaseComponent } from '../../baseComponent';
import { Button } from '../../shared/button/button';
import './engine.scss';

export class Engine extends BaseComponent<HTMLDivElement> {
  private distance: DistanceType;

  private id: number;

  private startEngineButton: Button;

  private stopEngineButton: Button;

  constructor(distance: DistanceType, id: number) {
    super('div', ['engine']);
    this.distance = distance;
    this.id = id;

    this.startEngineButton = new Button(['engine__btn', 'engine__btn--start'], 'A');
    this.stopEngineButton = new Button(
      ['engine__btn', 'engine__btn--stop', 'engine__btn--disabled'],
      'B',
    );
  }

  public draw = (): void => {
    this.node.append(this.startEngineButton.node, this.stopEngineButton.node);

    this.startEngineButton.onClick(this.startEngine);
    this.stopEngineButton.onClick(this.stopEngine);
  };

  private startEngine = () => {
    console.log('start engine', this.id);
    store.isActiveEngine = true;
    this.isDisabled(store.isActiveEngine);
    raceState.startEngine(this.id, this.distance);
  };

  private stopEngine = () => {
    console.log('stop engine');
    store.isActiveEngine = false;
    this.isDisabled(store.isActiveEngine);
  };

  private isDisabled = (isActive: boolean): void => {
    if (isActive) {
      this.disabledButton(this.startEngineButton.node);
      this.activeButton(this.stopEngineButton.node);
    } else {
      this.activeButton(this.startEngineButton.node);
      this.disabledButton(this.stopEngineButton.node);
    }
  };

  private disabledButton = (button: HTMLButtonElement): void => {
    button.classList.add('engine__btn--disabled');
    button.setAttribute('disabled', 'true');
  };

  private activeButton = (button: HTMLButtonElement): void => {
    button.classList.remove('engine__btn--disabled');
    button.removeAttribute('disabled');
  };
}
