import { App } from './components/app/app';
import { IFilter } from './interface/types';
import './styles/style.scss';
import { getFromLocalStorage } from './util/util';

export const filters: IFilter = {
  sort: 'price-lowest',
  search: '',
  category: '',
  company: '',
  colors: '',
  price: '0 3100',
  cart: '',
  year: '2018 2022',
  popular: 'false',
};

if (window.localStorage.getItem('filters')) {
  getFromLocalStorage();
}

const app: App = new App(document.body);
app.start();
