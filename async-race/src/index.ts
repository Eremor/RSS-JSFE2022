import { App } from './components/app/app';
import './styles/style.scss';

window.onload = (): void => {
  const app: App = new App(document.body);
  app.start();
};
