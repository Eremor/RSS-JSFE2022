import { filters } from '../../..';
import { saveToLocalStorage } from '../../../util/util';
import { BaseFilterComponent } from './baseFilterComponent';

export class PopularFilter extends BaseFilterComponent {
  constructor() {
    super(['filters__popular', 'popular'], 'Popular');

    const container: HTMLDivElement = document.createElement('div');
    container.classList.add('popular__container');

    const box: HTMLInputElement = document.createElement('input');
    box.classList.add('visually-hidden');
    box.type = 'checkbox';
    box.id = 'popular';
    box.checked = filters.popular === 'true';

    const title: HTMLLabelElement = document.createElement('label');
    title.classList.add('popular__title');
    title.setAttribute('for', 'popular');
    title.textContent = 'Show popular';

    if (box.checked) {
      title.classList.add('popular__title--active');
    } else {
      title.classList.remove('popular__title--active');
    }

    container.append(box, title);
    this.node.append(container);

    title.addEventListener('click', () => this.onToggle(box));
  }

  private onToggle = (box: HTMLInputElement): void => {
    box.checked = !box.checked;
    filters.popular = `${box.checked}`;
    saveToLocalStorage();
  };
}
