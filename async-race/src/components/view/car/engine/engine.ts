import { BaseComponent } from '../../baseComponent';
import { Button } from '../../shared/button/button';
import './engine.scss';

export class Engine extends BaseComponent<HTMLDivElement> {
  constructor() {
    super('div', ['engine']);
  }

  public draw = (): void => {
    const startBtn = new Button(['engine__btn', 'engine__btn--start'], 'A');
    const stopBtn = new Button(['engine__btn', 'engine__btn--stop', 'engine__btn--disabled'], 'B');
    stopBtn.node.disabled = true;

    this.node.append(startBtn.node, stopBtn.node);

    startBtn.onClick(this.startEngine);
    stopBtn.onClick(this.stopEngine);
  };

  private startEngine = () => {
    console.log('start engine');
  };

  private stopEngine = () => {
    console.log('stop engine');
  };
}
