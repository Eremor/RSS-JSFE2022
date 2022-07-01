import { INews, ISource, IView } from '../../interfaces/types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
  private news: News = new News();
  private sources: Sources = new Sources();

  public drawNews(data: IView): void {
    const values: INews[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: IView): void {
    const values: ISource[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
