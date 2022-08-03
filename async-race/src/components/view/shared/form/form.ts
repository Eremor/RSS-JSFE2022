import { ICar } from '../../../../types/types';
import { BaseComponent } from '../../baseComponent';
import { Button } from '../button/button';
import { Input } from '../input/input';
import './form.scss';

export class Form extends BaseComponent<HTMLFormElement> {
  private btnName: string;

  private text: Input = new Input(['form__name'], 'text');

  private color: Input = new Input(['form__color'], 'color');

  private button: Button = new Button(['btn--light'], '');

  private store: ICar;

  constructor(classes: string[], btnName: string, store: ICar) {
    super('font', ['form', ...classes]);
    this.btnName = btnName;
    this.store = store;
  }

  public draw = (): void => {
    this.text.draw(this.store.name);
    this.color.draw(this.store.color);
    this.button.node.textContent = this.btnName;
    this.node.append(this.text.node, this.color.node, this.button.node);

    this.node.addEventListener('input', this.onChange);
  };

  public onSubmit = (callback: () => void): void => {
    this.button.onClick(callback);
  };

  public onChange = () => {
    this.store.name = this.text.node.value;
    this.store.color = this.color.node.value;
  };

  public isDisabled = (selected: boolean): void => {
    if (selected) {
      this.activeElement(this.text.node);
      this.activeElement(this.color.node);
      this.activeElement(this.button.node);
    } else {
      this.disabledElement(this.text.node);
      this.disabledElement(this.color.node);
      this.disabledElement(this.button.node);
    }
  };

  private disabledElement = (element: HTMLElement): void => {
    element.classList.add('form--disabled');
    element.setAttribute('disabled', 'true');
    if (element.classList.contains('btn')) {
      element.classList.add('btn--disabled');
    }
  };

  private activeElement = (element: HTMLElement): void => {
    element.classList.remove('form--disabled');
    element.removeAttribute('disabled');
    if (element.classList.contains('btn')) {
      element.classList.remove('btn--disabled');
    }
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
    this.store.name = '';
    this.store.color = '#ffffff';
  };
}
