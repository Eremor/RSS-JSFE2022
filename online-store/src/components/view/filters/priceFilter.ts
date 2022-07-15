import { PriceSlider } from '../slider/priceSlider';
import { BaseFilterComponent } from './baseFilterComponent';
import * as noUiSlider from 'nouislider';
import { filters } from '../../../index';

export class PriceFilter extends BaseFilterComponent {
  constructor() {
    super(['filters__price', 'price'], 'Price');

    const priceRange: string[] = filters.price.split(' ');

    const container: HTMLDivElement = document.createElement('div');
    container.classList.add('price__content');

    const desc: HTMLParagraphElement = document.createElement('p');
    desc.classList.add('price__cost');
    desc.textContent = `$${priceRange[0]} - $${priceRange[1]}`;

    const priceSlider: PriceSlider = new PriceSlider();

    const slider = priceSlider.node as noUiSlider.target;
    slider.noUiSlider?.set(priceRange);

    container.append(desc, priceSlider.node);
    this.node.append(container);

    slider.noUiSlider?.on('update', (values) => {
      let [min, max]: Array<string | number> = values;

      min = typeof min === 'number' ? min.toFixed() : min.slice(0, -3);
      max = typeof max === 'number' ? max.toFixed() : max.slice(0, -3);

      desc.textContent = `$${min} - $${max}`;
      filters.price = `${min} ${max}`;
    });

    slider.noUiSlider?.on('end', () => {
      this.node.dispatchEvent(new Event('input', { bubbles: true }));
    });

    slider.noUiSlider?.on('change', () => {
      this.node.dispatchEvent(new Event('input', { bubbles: true }));
    });
  }
}
