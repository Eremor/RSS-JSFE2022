import { filters } from '../../..';
import { ICard } from '../../../interface/types';
import { Popup } from '../popup/popup';
import './card.scss';

export class Cards {
  public draw = (data: ICard[], callback: (data: ICard[]) => ICard[]): void | never => {
    const container = <HTMLDivElement>document.querySelector('.sources');
    container.innerHTML = '';

    const cardList: ICard[] = callback(data);

    if (cardList.length === 0) {
      const notFound: HTMLParagraphElement = document.createElement('p');
      notFound.classList.add('card__not-found');
      notFound.textContent = 'Sorry, no matches found';

      container.append(notFound);
      return;
    }

    const quantityProducts = <HTMLElement>document.querySelector('.sort__value');
    quantityProducts.textContent = `${cardList.length}`;

    cardList.forEach((card: ICard): void => {
      const { id, name, price, image }: ICard = card;

      let isCart = false;
      const cartArr = filters.cart.split(' ');
      for (let i = 0; i < cartArr.length; i++) {
        if (cartArr[i] === card.id) {
          isCart = true;
        }
      }

      const body: HTMLDivElement = document.createElement('div');
      body.classList.add('sources__card', 'card');
      body.id = id;
      isCart ? body.classList.add('card--active') : body.classList.remove('card--active');

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
      container.append(body);

      body.addEventListener('click', (e: Event) => this.onClick(e, card));
    });
  };

  private onClick = (e: Event, card: ICard): void => {
    const target = <HTMLElement>e.target;
    const parent = <HTMLElement>target.parentElement;
    if (parent.classList.contains('card__btn')) {
      const popup: Popup = new Popup(card);
      popup.draw();
    }
  };
}
