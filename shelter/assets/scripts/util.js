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

export const pseudoRandom = async () => {
  const pets = await getPets();

  let fullList = (() => {
    let tempArr = [];

    for(let i = 0; i < 6; i++) {
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

  fullList = sortRecursivelySlide(fullList, 6, 8);
  
  return fullList;
}

const sortRecursivelySlide = (list, elemOnScreen, elemStack) => {
  const length = list.length;
  for(let i = 0; i < (length / elemOnScreen); i++) {
    const stepList = list.slice(i * elemOnScreen, (i * elemOnScreen) + elemOnScreen);
    
    for(let j = 0; j < elemOnScreen; j++) {
      const duplicatedItem = stepList.find((item, index) => {
        return item.id === stepList[j].id && (index !== j)
      })
      if(duplicatedItem !== undefined) {
        const index = (i * elemOnScreen) + j;
        const whichOfList = Math.trunc(index / elemStack)
        
        list.splice(whichOfList * elemStack, 0, list.splice(index, 1)[0])
        sortRecursivelySlide(list)
      }
    }
  }
  return list;
}