import { App } from './components/app/app';
import { IFilter } from './interface/types';
import './styles/style.scss';

export const filters: IFilter = {
  sort: 'price-lowest',
  search: '',
  category: '',
  company: '',
  colors: '',
  price: '0 3100',
  cart: '',
};

const app = new App(document.body);
app.start();
