import { ICard } from '../../../interface/types';
import './card.scss';

export class Cards {
  public draw = (data: ICard[]): void => {
    const container = <HTMLDivElement>document.querySelector('.sources');
    container.innerHTML = '';

    data.forEach((card: ICard) => {
      const { id, name, price, image, colors, company, description, category }: ICard = card;

      const body: HTMLDivElement = document.createElement('div');
      body.classList.add('sources__card', 'card');
      body.id = id;

      const imgContainer: HTMLDivElement = document.createElement('div');
      imgContainer.classList.add('card__img');

      const img: HTMLImageElement = document.createElement('img');
      img.src = image;
      img.alt = name;

      imgContainer.append(img);

      const overflow: HTMLDivElement = document.createElement('div');
      overflow.classList.add('card__overflow');

      const cardBtn: HTMLButtonElement = document.createElement('button');
      cardBtn.classList.add('card__btn');

      const btnIcon: HTMLSpanElement = document.createElement('span');
      cardBtn.append(btnIcon);

      overflow.append(cardBtn);

      const content: HTMLDivElement = document.createElement('div');
      content.classList.add('card__content');

      const title: HTMLHeadingElement = document.createElement('h4');
      title.classList.add('card__title');
      title.textContent = name;

      const cardPrice: HTMLSpanElement = document.createElement('span');
      cardPrice.classList.add('card__price');
      cardPrice.textContent = `$${price / 100}`;

      content.append(title, cardPrice);

      body.append(imgContainer, overflow, content);
      console.log(colors, company, description, category);

      container.append(body);
    });
  };
}