import { filters } from '../../..';
import { YearSlider } from '../slider/yearSlider';
import * as noUiSlider from 'nouislider';
import { BaseFilterComponent } from './baseFilterComponent';
import { saveToLocalStorage } from '../../../util/util';

export class YearFilter extends BaseFilterComponent {
  constructor() {
    super(['filters__year', 'year'], 'Year');

    const yearRange: string[] = filters.year.split(' ');

    const container: HTMLDivElement = document.createElement('div');
    container.classList.add('year__content');

    const desc: HTMLParagraphElement = document.createElement('p');
    desc.classList.add('price__cost');
    desc.textContent = `${yearRange[0]} - ${yearRange[1]}`;

    const yearSlider: YearSlider = new YearSlider();

    const slider = yearSlider.node as noUiSlider.target;
    slider.noUiSlider?.set(yearRange);

    container.append(desc, yearSlider.node);
    this.node.append(container);

    slider.noUiSlider?.on('update', (values: Array<string | number>) => {
      let [min, max]: Array<string | number> = values;

      min = typeof min === 'number' ? min.toFixed() : min.slice(0, -3);
      max = typeof max === 'number' ? max.toFixed() : max.slice(0, -3);

      desc.textContent = min === max ? `${min}` : `${min} - ${max}`;
      filters.year = `${min} ${max}`;
    });

    slider.noUiSlider?.on('end', () => {
      this.node.dispatchEvent(new Event('input', { bubbles: true }));
    });

    slider.noUiSlider?.on('change', () => {
      this.node.dispatchEvent(new Event('input', { bubbles: true }));
      saveToLocalStorage();
    });
  }
}
