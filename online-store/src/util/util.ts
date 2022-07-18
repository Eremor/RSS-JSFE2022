import { filters } from '..';
import { IFilter } from '../interface/types';

export const saveToLocalStorage = (): void => {
  const filtersValue: string = JSON.stringify(filters);
  window.localStorage.setItem('filters', filtersValue);
  console.log('save');
};

export const getFromLocalStorage = (): void => {
  const data = <string>window.localStorage.getItem('filters');
  const filtersValue: IFilter = JSON.parse(data);
  for (const key in filtersValue) {
    filters[key as keyof typeof filtersValue] = filtersValue[key as keyof typeof filtersValue];
  }
};
