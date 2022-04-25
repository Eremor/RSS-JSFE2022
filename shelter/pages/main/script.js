import { Burger } from "../../assets/scripts/burger.js";
import { Card } from "../../assets/scripts/card.js";
import { getPets, pseudoRandom, showPopup } from "../../assets/scripts/util.js";

const burgerBtn = document.querySelector('.burger');
const navBar = document.querySelector('.nav');
const cardList = document.querySelectorAll('.card');
const slider = document.querySelector('.slider');
const sliderBody = slider.children[1];

let currentPets = [];

const burger = new Burger(navBar, burgerBtn);

const getOffset = () => {
  let offsetX;

  if(window.innerWidth >= 1280) {
    offsetX = 1080;
  } else if(window.innerWidth >= 768) {
    offsetX = 4;
  } else {
    offsetX = 2;
  }

  return offsetX;
}

const getAmountCardsOnPage = () => {
  let amountCards;

  if(window.innerWidth >= 1280) {
    amountCards = 3;
  } else if(window.innerWidth >= 768) {
    amountCards = 2;
  } else {
    amountCards = 1;
  }

  return amountCards;
}

const amountCardsOnPage = getAmountCardsOnPage();

const addPetToSlider = async () => {
  
  const petList = await getPets();
  const pets = await pseudoRandom(petList, currentPets);

  for(let i = 0; i < amountCardsOnPage; i++) {
    const card = new Card(pets[i], 'slider__item').create();
    sliderBody.append(card);
    currentPets.push(pets[i])
  }
}

addPetToSlider();

let count = 1;
const offsetX = getOffset();

const moveToNext = async () => {
  const petList = await getPets();
  const pets = await pseudoRandom(petList, currentPets);

  for(let i = 0; i < 3; i++) {
    const card = new Card(pets[i], 'slider__item').create();
    sliderBody.append(card);
    currentPets.push(pets[i])
    currentPets.shift();
  }

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.style.transform = `translateX(-${offsetX * count}px)`);
  count++;
}

const moveToPrev = async () => {
  const petList = await getPets();
  const pets = await pseudoRandom(petList, currentPets);

  for(let i = 0; i < 3; i++) {
    const card = new Card(pets[i], 'slider__item').create();
    sliderBody.prepend(card);
    currentPets.push(pets[i]);
    currentPets.pop();
  }
}

const moveSlider = async (e) => {  
  if(e.target.classList.contains('arrow--right')) {
    await moveToNext();
  }
  if(e.target.classList.contains('arrow--left')) {
    await moveToPrev();
  }
}

burgerBtn.addEventListener('click', burger.toggle);
navBar.addEventListener('click', burger.hideOnClick);
cardList.forEach((card) => card.addEventListener('click', showPopup));
slider.addEventListener('click', moveSlider);