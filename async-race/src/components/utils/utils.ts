import { AnimationType, IPositionElement } from '../../types/irace';
import { DistanceType, ICar } from '../../types/types';
import { store } from './stor';

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

const getPosition = (element: HTMLElement): IPositionElement => {
  const { top, left, width, height } = element.getBoundingClientRect();

  return {
    x: left + width / 2,
    y: top + height / 2,
  };
};

export const getRaceDistance = (startElement: HTMLElement, finishElement: HTMLElement): number => {
  const startPosition: IPositionElement = getPosition(startElement);
  const finishPosition: IPositionElement = getPosition(finishElement);

  return Math.hypot(startPosition.x - finishPosition.x, startPosition.y - finishPosition.y);
};

export const animation = (
  car: HTMLElement,
  distance: number,
  animationTime: number,
): AnimationType => {
  let start: number | null = null;
  const state: AnimationType = { id: 0 };

  const stepAnimation = (timestamp: number) => {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const passedDistance = Math.round(time * (distance / animationTime));

    const transform = `transform: translate(${Math.min(passedDistance, distance)}px)`;
    car.setAttribute('style', `${transform}`);

    if (passedDistance < distance) {
      state.id = window.requestAnimationFrame(stepAnimation);
    }
  };
  state.id = window.requestAnimationFrame(stepAnimation);

  return state;
};

export const getRoad = (id: number): DistanceType => {
  const carItem = <HTMLElement>store.carsAtRace.find((car: HTMLElement) => +car.id === id);

  const road = <HTMLDivElement>carItem.children[1];

  const car = <HTMLElement>road.children[1];
  const flag = <HTMLElement>road.children[2];

  return { car, flag };
};
