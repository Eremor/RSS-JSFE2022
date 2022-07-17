import { BaseComponent } from '../baseComponent';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import './slider.scss';

export class YearSlider extends BaseComponent {
  constructor() {
    super('div');
    this.node.id = 'year-slider';

    noUiSlider.create(this.node, {
      start: ['2018', '2022'],
      connect: true,
      range: {
        min: 2018,
        max: 2022,
      },
      step: 1,
    });
  }
}
