import { BaseComponent } from '../baseComponent';

export class BaseFilterComponent extends BaseComponent {
  constructor(classes: string[], title: string) {
    super('div', [...classes]);

    const filterTitle: HTMLHeadingElement = document.createElement('h3');
    filterTitle.classList.add('filters__title');
    filterTitle.textContent = title;

    this.node.append(filterTitle);
  }
}
