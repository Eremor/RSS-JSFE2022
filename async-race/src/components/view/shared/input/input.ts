import { BaseComponent } from '../../baseComponent';

export class Input extends BaseComponent<HTMLInputElement> {
  constructor(classes: string[], type: string, defaultValue: string) {
    super('input', [...classes]);
    this.node.setAttribute('type', type);
    this.node.value = defaultValue;
  }
}
