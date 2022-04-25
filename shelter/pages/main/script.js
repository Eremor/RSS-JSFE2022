import { Burger } from "../../assets/scripts/burger.js";
import { showPopup } from "../../assets/scripts/util.js";

const burgerBtn = document.querySelector('.burger');
const navBar = document.querySelector('.nav');
const cardList = document.querySelectorAll('.card');

const burger = new Burger(navBar, burgerBtn);



burgerBtn.addEventListener('click', burger.toggle);
navBar.addEventListener('click', burger.hideOnClick);
cardList.forEach((card) => card.addEventListener('click', showPopup));