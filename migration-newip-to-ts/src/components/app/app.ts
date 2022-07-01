import { IView } from '../../interfaces/types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  private controller = new AppController();
  private view = new AppView();

  public start(): void {
    const sources = <HTMLLIElement>document.querySelector('.sources');
    sources.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data as IView)));
    this.controller.getSources((data) => this.view.drawSources(data as IView));
  }
}

export default App;
