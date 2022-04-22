export const getPet = async (petName) => {
  const res = await fetch('../../assets/pets.json');
  const pets = await res.json();
  return pets.filter(pet => pet.name == petName)[0];
}