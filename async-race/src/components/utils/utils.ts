import { ICar } from '../../types/types';

const carsBrand: string[] = [
  'Audi',
  'BMW',
  'Ford',
  'Honda',
  'Hyundai',
  'Kia',
  'Mazda',
  'Mercedes',
  'Toyota',
  'Volkswagen',
];

const carsModel: string[] = [
  'Q7',
  'A7',
  'X6',
  '3',
  'Accord',
  'Civic',
  'i30',
  'Solaris',
  'Rio',
  'Sorento',
  'CX5',
  'RX 8',
  'SLK',
  'GLE',
  'Camry',
  'Celica',
  'Polo',
  'Golf',
];

const getRandomCarName = (): string => {
  const brand: string = carsBrand[Math.floor(Math.random() * carsBrand.length)];
  const model: string = carsModel[Math.floor(Math.random() * carsModel.length)];

  return `${brand} ${model}`;
};

const getRandomCarColor = (): string => {
  const symbolsHEX = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += symbolsHEX[Math.floor(Math.random() * symbolsHEX.length)];
  }

  return color;
};

export const generateRandomCars = (count: number): ICar[] => {
  const cars: ICar[] = new Array(count).fill({ name: '', color: '' }).map(() => ({
    name: getRandomCarName(),
    color: getRandomCarColor(),
  }));

  return cars;
};
