import { IRout } from '../../types/types';

export const getRouting = (routing: string[], callbacks: Array<() => void>): IRout[] => {
  const routList: IRout[] = [];
  for (let i = 0; i < routing.length; i += 1) {
    const rout: IRout = {
      name: routing[i],
      onDraw: () => callbacks[i],
    };
    routList.push(rout);
  }
  return routList;
};
