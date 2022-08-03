import { BaseComponent } from '../../baseComponent';

export class Input extends BaseComponent<HTMLInputElement> {
  constructor(classes: string[], type: string) {
    super('input', [...classes]);
    this.node.setAttribute('type', type);
  }

  public draw = (defaultValue: string) => {
    this.node.value = defaultValue;
  };
}
