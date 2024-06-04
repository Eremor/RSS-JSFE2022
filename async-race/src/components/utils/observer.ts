import { IObserver } from '../../types/types';

class Observer {
  private listeners: IObserver[] = [];

  public subscribe = (listener: IObserver): void => {
    this.listeners.push(listener);
  };

  public unsubscribe = (listener: IObserver): void => {
    this.listeners = this.listeners.filter((item: IObserver) => item !== listener);
  };

  public notify = (action: string): void => {
    this.listeners.forEach((listener: IObserver) => {
      if (listener.action === action) {
        listener.callback();
      }
    });
  };
}

export const observer: Observer = new Observer();
