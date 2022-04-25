import { Burger } from "../../assets/scripts/burger.js";
import { pseudoRandom } from "../../assets/scripts/util.js";
import { Card } from "../../assets/scripts/card.js";

const burgerBtn = document.querySelector('.burger');
const navBar = document.querySelector('.nav');
const container = document.querySelector('.friends__content');
const arrowStart = document.querySelector('[data-arrow="start"]');
const arrowPrev = document.querySelector('[data-arrow="prev"]');
const arrowNext = document.querySelector('[data-arrow="next"]');
const arrowEnd = document.querySelector('[data-arrow="end"]');
const counter = document.querySelector('.btn--number');

const burger = new Burger(navBar, burgerBtn);

const getLastPage = (() => {
  let lastPage;

  if(window.innerWidth >= 1280) {
    lastPage = 5;
  } else if(window.innerWidth >= 768) {
    lastPage = 7;
  } else {
    lastPage = 15;
  }

  return lastPage;
})();

const offsetY = (() => {
  let height;

  if(window.innerWidth >= 1280) {
    height = 900;
  } else {
    height = 1365;
  }
})();

let countPage = 1;
const randomPets = await pseudoRandom();

const initCard = () => {
  randomPets.forEach((pet) => {
    const card = new Card(pet, 'friends__item').create();
    container.append(card);
  })
}

initCard();

const updateCountBtn = () => {
  counter.textContent = countPage;
}

const setDisabledButton = () => {
  if(countPage == 1) {
    arrowStart.classList.add('btn--disabled');
    arrowPrev.classList.add('btn--disabled');
    arrowStart.setAttribute('disabled', 'true');
    arrowPrev.setAttribute('disabled', 'true');
  } else {
    arrowStart.classList.remove('btn--disabled');
    arrowPrev.classList.remove('btn--disabled');
    arrowStart.removeAttribute('disabled');
    arrowPrev.removeAttribute('disabled');
  }

  if(countPage == getLastPage) {
    arrowEnd.classList.add('btn--disabled');
    arrowNext.classList.add('btn--disabled');
    arrowEnd.setAttribute('disabled', 'true');
    arrowNext.setAttribute('disabled', 'true');
  } else {
    arrowEnd.classList.remove('btn--disabled');
    arrowNext.classList.remove('btn--disabled');
    arrowEnd.removeAttribute('disabled');
    arrowNext.removeAttribute('disabled');
  }
}

burgerBtn.addEventListener('click', burger.toggle);
navBar.addEventListener('click', burger.hideOnClick);

arrowEnd.addEventListener('click', () => {
  container.style.top = `calc(0px - ${offsetY * getLastPage}px)`;
  countPage = getLastPage;
  updateCountBtn();
  setDisabledButton();
});

arrowNext.addEventListener('click', () => {
  if(countPage < getLastPage) {
    countPage++;
  }
  container.style.top = `calc(0px - ${offsetY * countPage}px)`;
  updateCountBtn();
  setDisabledButton();
});

arrowPrev.addEventListener('click', () => {
  if(countPage > 1) {
    countPage--;
  }
  container.style.top = `calc(0px - ${offsetY * countPage}px)`;
  updateCountBtn();
  setDisabledButton();
});

arrowStart.addEventListener('click', () => {
  container.style.top = '0px';
  countPage = 1;
  updateCountBtn();
  setDisabledButton();
})