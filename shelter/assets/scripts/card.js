export class Card {
  constructor(pet, className) {
    this.pet = pet;
    this.className = className;
  }

  create = () => {
    const cardImage = document.createElement('img');
    cardImage.classList.add('card__img');
    cardImage.src = this.pet.img;
    cardImage.alt = `${this.pet.name} pet`;

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card__title');
    cardTitle.textContent = this.pet.name;

    const cardBtn = document.createElement('button');
    cardBtn.classList.add('card__btn', 'btn', 'btn--outline');
    cardBtn.textContent = 'Learn more';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card', this.className);
    cardBody.append(cardImage, cardTitle, cardBtn);

    return cardBody;
  }
}