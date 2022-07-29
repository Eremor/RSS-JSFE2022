import { BaseComponent } from '../baseComponent';
import { Button } from '../shared/button/button';
import { Input } from '../shared/input/input';
import './form.scss';

export class Form extends BaseComponent<HTMLFormElement> {
  private btnName: string;

  constructor(classes: string[], btnName: string) {
    super('font', ['form', ...classes]);
    this.btnName = btnName;
  }

  public draw = (): void => {
    const text: Input = new Input(['form__name'], 'text', '');
    const color: Input = new Input(['form__color'], 'color', '#ffffff');
    const button: Button = new Button(['btn--light'], this.btnName);

    this.node.append(text.node, color.node, button.node);
  };
}
