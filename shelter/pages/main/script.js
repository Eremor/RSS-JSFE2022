import { Burger } from "../../assets/scripts/burger.js";
import { Card } from "../../assets/scripts/card.js";
import { getPets, pseudoRandom, showPopup } from "../../assets/scripts/util.js";

const burgerBtn = document.querySelector('.burger');
const navBar = document.querySelector('.nav');
const cardList = document.querySelectorAll('.card');
const slider = document.querySelector('.slider');
const leftBtn = slider.querySelector('.arrow--left');
const rightBtn = slider.querySelector('.arrow--right');
const carousel = slider.querySelector('.slider__wrapper');
const sliderLeft = slider.querySelector('.slider__left');
const sliderRight = slider.querySelector('.slider__right');
const activeSlide = slider.querySelector('.slider__active');

let randomPets = await pseudoRandom();

const burger = new Burger(navBar, burgerBtn);

const getAmountCardsOnPage = (() => {
  let amountCards;

  if(window.innerWidth >= 1280) {
    amountCards = 3;
  } else if(window.innerWidth >= 768) {
    amountCards = 2;
  } else {
    amountCards = 1;
  }

  return amountCards;
})();

const createCards = (container) => {
  for(let i = 0; i < getAmountCardsOnPage; i++) {
    const card = new Card(randomPets[i], 'slider__item').create();
    container.append(card);
    randomPets.shift();
  }
}

const initialCard = () => {
  createCards(sliderLeft);
  createCards(activeSlide);
  createCards(sliderRight);
}

initialCard();

const moveLeft = () => {
  carousel.classList.add('transition-left');
  leftBtn.removeEventListener('click', moveLeft);
  rightBtn.removeEventListener('click', moveRight);
}

const moveRight = () => {
  carousel.classList.add('transition-right');
  leftBtn.removeEventListener('click', moveLeft);
  rightBtn.removeEventListener('click', moveRight);
}

const handlerAnimation = async (e) => {
  let changeItem;

  if(e.animationName === 'move-left') {
    carousel.classList.remove('transition-left');
    changeItem = sliderLeft;
    activeSlide.innerHTML = sliderLeft.innerHTML;
  } else {
    carousel.classList.remove('transition-right');
    changeItem = sliderRight;
    activeSlide.innerHTML = sliderRight.innerHTML;
  }

  changeItem.innerHTML = '';
  createCards(changeItem);

  if(randomPets.length < getAmountCardsOnPage) {
    randomPets = await pseudoRandom();
  }

  leftBtn.addEventListener('click', moveLeft);
  rightBtn.addEventListener('click', moveRight);
}

burgerBtn.addEventListener('click', burger.toggle);
navBar.addEventListener('click', burger.hideOnClick);
cardList.forEach((card) => card.addEventListener('click', showPopup));
leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);
carousel.addEventListener('animationend', handlerAnimation);