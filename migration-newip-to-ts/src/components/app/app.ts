import { IView } from '../../interfaces/types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  private controller: AppController = new AppController();
  private view: AppView = new AppView();

  public start(): void {
    const sources = <HTMLLIElement>document.querySelector('.sources');
    sources.addEventListener('click', (e: MouseEvent) => {
      this.controller.getNews(e, (data) => this.view.drawNews(data as IView));

      const target = <HTMLElement>e.target;
      if (target.classList.contains('letter')) {
        const filter = <string>target.dataset.letter;
        this.controller.getSources((data) => this.view.drawSources(data as IView, filter[0]));
      }
    });
    this.controller.getSources((data) => this.view.drawAlphabet(data as IView));
  }
}

export default App;
