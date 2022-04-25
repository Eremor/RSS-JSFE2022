import { Popup } from "./popup.js";

export const getPet = async (petName) => {
  const res = await fetch('../../assets/pets.json');
  const pets = await res.json();
  return pets.filter(pet => pet.name == petName)[0];
}

export const showPopup = (e) => {
  if(e.target.classList.contains('card') || e.target.parentElement.classList.contains('card')) {
    let petName 
    if(e.target.classList.contains('card')) {
      petName = e.target.children[1].textContent;
    } else {
      petName = e.target.parentElement.children[1].textContent;
    }
    const popup = new Popup(petName);
    popup.create();
  }
}