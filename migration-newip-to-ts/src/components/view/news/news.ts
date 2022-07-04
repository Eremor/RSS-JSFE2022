import { INews } from '../../../interfaces/types';
import './news.css';

class News {
  public draw(data: INews[]): void {
    const news: INews[] = data.length >= 10 ? data.filter((_item: INews, idx: number) => idx < 10) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

    news.forEach((item: INews, idx: number): void => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

      if (idx % 2) {
        const newsItem = <HTMLDivElement>newsClone.querySelector('.news__item');
        newsItem.classList.add('alt');
      }

      const newsImage = <HTMLImageElement>newsClone.querySelector('.news__meta-photo');
      newsImage.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

      const newsAuthor = <HTMLLIElement>newsClone.querySelector('.news__meta-author');
      newsAuthor.textContent = item.author || item.source.name;

      const newsDate = <HTMLLIElement>newsClone.querySelector('.news__meta-date');
      newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

      const newsDescTitle = <HTMLHeadingElement>newsClone.querySelector('.news__description-title');
      newsDescTitle.textContent = item.title;

      const newsDescSource = <HTMLHeadingElement>newsClone.querySelector('.news__description-source');
      newsDescSource.textContent = item.source.name;

      const newsDescContent = <HTMLParagraphElement>newsClone.querySelector('.news__description-content');
      newsDescContent.textContent = item.description;

      const newsDescButton = <HTMLLinkElement>newsClone.querySelector('.news__read-more a');
      newsDescButton.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    const newsContainer = <HTMLElement>document.querySelector('.news');
    newsContainer.innerHTML = '';
    newsContainer.appendChild(fragment);
  }
}

export default News;
