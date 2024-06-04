import { BaseComponent } from '../view/baseComponent';

export class Link extends BaseComponent {
  constructor(classes: string[], content: string, link: string) {
    super('a', [...classes], content);
    (this.node as HTMLLinkElement).href = link;
  }
}
