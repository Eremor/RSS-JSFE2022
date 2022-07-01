import { INews, ISource } from '../../interfaces/types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources(callback: (data?: ISource) => void) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: (data?: INews) => void) {
    let target = <HTMLElement>e.target;
    const newsContainer = <HTMLElement>e.currentTarget;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = <string>target.getAttribute('data-source-id');
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
