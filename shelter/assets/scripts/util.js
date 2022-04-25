import { Popup } from "./popup.js";

export const getPet = async (petName) => {
  const res = await fetch('../../assets/pets.json');
  const pets = await res.json();
  return pets.filter(pet => pet.name == petName)[0];
}

export const getPets = async () => {
  const res = await fetch('../../assets/pets.json');
  return res.json();
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

export const pseudoRandom = async (pets, current) => {
  let fullList = (() => {
    let tempArr = [];

    for(let i = 0; i < 1; i++) {
      const newPetsCard = pets;

      for(let j = pets.length; j > 0; j--) {
        let randomIndex = Math.floor(Math.random() * j);
        const randomElem = newPetsCard.splice(randomIndex, 1)[0];
        newPetsCard.push(randomElem);
      }

      tempArr = [...tempArr, ...newPetsCard];
    }
    return tempArr;
  })();

  fullList = sortCards(fullList, current);
  
  return fullList;
}

export const sortCards = (list, petOnScreen) => {
  const newList = list;

  for(let i = 0; i < newList.length; i++) {
    for(let j = 0 ; j < petOnScreen.length; j++) {
      if(newList[i].name === petOnScreen[j].name) {
        newList.splice(i, 1);
      }
    }
  }

  return newList;
}