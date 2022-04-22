import { Burger } from "../../assets/scripts/burger.js";
import { Popup } from "../../assets/scripts/popup.js";

const burgerBtn = document.querySelector('.burger');
const navBar = document.querySelector('.nav');
const cardList = document.querySelectorAll('.card');

const burger = new Burger(navBar, burgerBtn);

const showPopup = (e) => {
  if(e.target.classList.contains('card__btn')) {
    const petName = e.target.parentElement.children[1].textContent;
    const popup = new Popup(petName);
    popup.create();
  }
}

burgerBtn.addEventListener('click', burger.toggle);
navBar.addEventListener('click', burger.hideOnClick);
cardList.forEach((card) => card.addEventListener('click', showPopup));