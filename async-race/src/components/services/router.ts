import { IRout } from '../../types/types';

export class Router {
  constructor(private readonly parentElement: HTMLElement, private readonly routList: IRout[]) {
    window.onpopstate = (): void => {
      this.changeRout();
    };
  }

  public changeRout = (): void => {
    this.clearPage();
    const currentRoutName = window.location.hash.slice(1);
    const currentRout = <IRout>this.routList.find((rout: IRout) => rout.name === currentRoutName);
    currentRout.onDraw();
  };

  private clearPage = (): void => {
    if (this.parentElement.lastChild !== null) {
      this.parentElement.removeChild(this.parentElement.lastChild);
    }
  };
}
