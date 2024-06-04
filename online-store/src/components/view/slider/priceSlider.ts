import { BaseComponent } from '../baseComponent';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import './slider.scss';

export class PriceSlider extends BaseComponent {
  constructor() {
    super('div');
    this.node.id = 'slider';

    noUiSlider.create(this.node, {
      start: ['0', '3100'],
      connect: true,
      range: {
        min: 0,
        max: 3100,
      },
      step: 10,
    });
  }
}
