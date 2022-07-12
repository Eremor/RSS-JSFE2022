import { App } from './components/app/app';
import { IFilter } from './interface/types';
import './styles/style.scss';

export const filters: IFilter = {
  sort: '',
  search: '',
  category: '',
  company: '',
  colors: '',
  price: '',
};

const app = new App(document.body);
app.start();
