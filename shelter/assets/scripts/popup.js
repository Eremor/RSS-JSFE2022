import { getPet } from "./util.js";

export class Popup {
  popup = document.createElement('div');

  constructor(petName) {
    this.petName = petName;

    this.popup.addEventListener('click', this.destroy);
  }

  create = async () => {
    const pet = await getPet(this.petName);

    const popupImage = document.createElement('img');
    popupImage.src = pet.img;
    popupImage.alt = `pet ${pet.name}`;

    const popupImageWrapper = document.createElement('div');
    popupImageWrapper.classList.add('popup__image');
    popupImageWrapper.append(popupImage);

    const popupTitle = document.createElement('h2');
    popupTitle.classList.add('popup__title');
    popupTitle.textContent = pet.name;

    const popupSubtitle = document.createElement('h3');
    popupSubtitle.classList.add('popup__subtitle');
    popupSubtitle.textContent = `${pet.type} - ${pet.breed}`;

    const popupDesc = document.createElement('p');
    popupDesc.classList.add('popup__desc');
    popupDesc.textContent = pet.description;

    const ageItem = this.createPetCharacteristics('Age', pet.age);
    const inoculationItem = this.createPetCharacteristics('Inoculations', pet.inoculations);
    const diseasesItem = this.createPetCharacteristics('Diseases', pet.diseases);
    const parasitesItem = this.createPetCharacteristics('Parasites', pet.parasites);

    const popupList = document.createElement('ul');
    popupList.classList.add('popup__list');
    popupList.append(ageItem, inoculationItem, diseasesItem, parasitesItem);

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup__content');
    popupContent.append(popupTitle, popupSubtitle, popupDesc, popupList);

    const popupBtn = document.createElement('button');
    popupBtn.classList.add('popup__btn', 'btn', 'btn--outline');

    const popupBody = document.createElement('div');
    popupBody.classList.add('popup__body');
    popupBody.append(popupImageWrapper, popupContent, popupBtn);

    const popupOverlate = document.createElement('div');
    popupOverlate.classList.add('popup__overlate');
    
    this.popup.classList.add('popup');
    this.popup.append(popupOverlate, popupBody);
    
    document.body.append(this.popup);
    document.body.style.overflow = 'hidden';

    popupOverlate.addEventListener('mouseover', (e) => this.handlerHoverButton(e, popupBtn));
    popupOverlate.addEventListener('mouseout', (e) => this.handlerHoverButton(e, popupBtn));
  }

  createPetCharacteristics = (title, char) => {
    let text = '';

    const itemTitle = document.createElement('strong');
    itemTitle.textContent = `${title}: `;
    
    const charItem = document.createElement('li');
    charItem.classList.add('popup__item');
    
    if(typeof char === 'string') {
      text = char;
    } else {
      for(let i = 0; i < char.length; i++) {
        text += char[i];

        if(char.length > 1 && char[i] != char[char.length - 1]) {
          text += ', ';
        }
      }
    }

    charItem.textContent = text;
    charItem.prepend(itemTitle);

    return charItem;
  }

  destroy = (e) => {
    if(e.target.classList.contains('popup__overlate') || e.target.classList.contains('popup__btn')) {
      this.popup.remove();
      document.body.style.overflow = 'visible';
    }
  }

  handlerHoverButton = (e, elem) => {
    if (e.type == 'mouseover') {
      elem.classList.add('popup__btn--hover');
    }

    if (e.type == 'mouseout') {
      elem.classList.remove('popup__btn--hover');
    }
  }
}
