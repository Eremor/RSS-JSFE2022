import { observer } from '../../../utils/observer';
import { currentCar } from '../../../utils/stor';
import { BaseComponent } from '../../baseComponent';
import { Button } from '../button/button';
import { Input } from '../input/input';
import './form.scss';

export class Form extends BaseComponent<HTMLFormElement> {
  private btnName: string;

  private text: Input = new Input(['form__name'], 'text', '');

  private color: Input = new Input(['form__color'], 'color', '#ffffff');

  private button: Button = new Button(['btn--light'], '');

  constructor(classes: string[], btnName: string) {
    super('font', ['form', ...classes]);
    this.btnName = btnName;
  }

  public draw = (): void => {
    this.button.node.textContent = this.btnName;
    this.node.append(this.text.node, this.color.node, this.button.node);
  };

  public onSubmit = (callback: () => void): void => {
    this.button.node.addEventListener('click', (e: Event) => {
      e.preventDefault();
      callback();
      this.clear();
      observer.notify('update garage');
    });
  };

  public get textValue(): string {
    return this.text.node.value;
  }

  public set textValue(value: string) {
    this.text.node.value = value;
  }

  public get colorValue(): string {
    return this.color.node.value;
  }

  public set colorValue(value: string) {
    this.color.node.value = value;
  }

  public clear = (): void => {
    this.textValue = '';
    this.colorValue = '#ffffff';
    currentCar.name = this.textValue;
    currentCar.color = this.colorValue;
  };
}
