import { filters } from '../../..';
import { ICard } from '../../../interface/types';
import { BaseComponent } from '../baseComponent';
import { PopupOption } from './popupOption';
import './popup.scss';

export class Popup extends BaseComponent {
  private card: ICard;

  constructor(card: ICard) {
    super('div', ['popup']);
    this.card = card;

    this.node.addEventListener('click', this.onClick);
  }

  public draw = (): void => {
    const overflow: HTMLDivElement = document.createElement('div');
    overflow.classList.add('popup__overflow');

    const body: HTMLDivElement = document.createElement('div');
    body.classList.add('popup__body');

    const img: HTMLImageElement = document.createElement('img');
    img.src = this.card.image;
    img.alt = this.card.name;

    const imgContainer: HTMLDivElement = document.createElement('div');
    imgContainer.classList.add('popup__img');
    imgContainer.append(img);

    const content: HTMLDivElement = document.createElement('div');
    content.classList.add('popup__content');

    const title: HTMLHeadingElement = document.createElement('h2');
    title.classList.add('popup__title');
    title.textContent = this.card.name;

    const price: HTMLParagraphElement = document.createElement('p');
    price.classList.add('popup__price');
    price.textContent = `$ ${this.card.price / 100}`;

    const description: HTMLParagraphElement = document.createElement('p');
    description.classList.add('popup__desc');
    description.textContent = this.card.description;

    const colorsContainer: HTMLDivElement = document.createElement('div');
    colorsContainer.classList.add('popup__option');

    const colorsTitle: HTMLHeadingElement = document.createElement('h3');
    colorsTitle.classList.add('popup__subtitle');
    colorsTitle.textContent = 'Colors';
    colorsContainer.append(colorsTitle);

    this.card.colors.forEach((item: string) => {
      const colorItem: HTMLSpanElement = document.createElement('span');
      colorItem.classList.add('popup__color');
      colorItem.style.backgroundColor = item;
      colorsContainer.append(colorItem);
    });

    const year: PopupOption = new PopupOption('Year: ', this.card.year);
    const brand: PopupOption = new PopupOption('Brand: ', this.card.company);
    const category: PopupOption = new PopupOption('Category: ', this.card.category);

    const btn: HTMLButtonElement = document.createElement('button');
    btn.classList.add('popup__btn');

    const cartArr: string[] = filters.cart.split(' ');
    const isCart = cartArr.find((value: string) => value === this.card.id);

    if (isCart) {
      btn.textContent = 'Remove from cart';
      btn.classList.remove('popup__btn--add');
      btn.classList.add('popup__btn--remove');
    } else {
      btn.textContent = 'Add to cart';
      btn.classList.remove('popup__btn--remove');
      btn.classList.add('popup__btn--add');
    }

    content.append(title, price, description, colorsContainer, year.node, brand.node, category.node, btn);
    body.append(imgContainer, content);
    this.node.append(overflow, body);
    document.body.append(this.node);
  };

  private onClick = (e: Event): void => {
    const target = <HTMLElement>e.target;

    if (target.classList.contains('popup__overflow')) {
      this.closePopup();
    }

    if (target.classList.contains('popup__btn')) {
      this.changeQuantityProductsInCart(target);
      this.closePopup();
    }
  };

  private closePopup = (): void => {
    document.body.removeChild(this.node);
  };

  private changeQuantityProductsInCart = (element: HTMLElement) => {
    const cartArr: string[] = filters.cart.split(' ');

    if (element.classList.contains('popup__btn--remove')) {
      let newCartArr = '';
      const x = cartArr.filter((el: string) => el !== this.card.id);

      x.forEach((el: string) => {
        newCartArr.length === 0 ? (newCartArr = el) : (newCartArr += ` ${el}`);
      });
      filters.cart = newCartArr;
    } else {
      let isSpace = false;
      for (let i = 0; i < cartArr.length; i++) {
        if (cartArr[i] === '') {
          isSpace = true;
        }
      }
      filters.cart = isSpace ? this.card.id : filters.cart + ` ${this.card.id}`;
    }

    this.node.dispatchEvent(new Event('filter', { bubbles: true }));
  };
}
