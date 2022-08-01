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

    this.startRaceButton.onClick((e) => console.log(e.target, 'start race'));
    this.resetRaceButton.onClick((e) => console.log(e.target, 'reset race'));
    this.generateCarsButton.onClick((e) => console.log(e.target, 'generate cars'));
  };
}
