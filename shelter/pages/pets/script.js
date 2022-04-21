import { Burger } from "../../assets/scripts/burger.js";

const burgerBtn = document.querySelector('.burger');
const navBar = document.querySelector('.nav');

const burger = new Burger(navBar, burgerBtn);

burgerBtn.addEventListener('click', burger.toggle);
navBar.addEventListener('click', burger.hideOnClick);