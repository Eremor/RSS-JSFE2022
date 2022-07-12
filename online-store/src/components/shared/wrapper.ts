import { BaseComponent } from '../view/baseComponent';

export class Wrapper extends BaseComponent {
  constructor(classes: string[]) {
    super('div', [...classes, 'wrapper']);
  }
}
