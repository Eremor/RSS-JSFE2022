import { Button } from '../shared/button/button';

export class RouterLink extends Button {
  constructor(text: string, routeName: string) {
    super(['btn--primary', 'header__route'], text);
    this.node.dataset.route = routeName;
    this.onClick(this.changeLink);
  }

  private changeLink = (e: Event): void => {
    const { target } = e;
    if ((target as HTMLButtonElement).classList.contains('header__route')) {
      window.location.hash = <string>(target as HTMLButtonElement).dataset.route;
      // const link = <string>(target as HTMLButtonElement).dataset.route;
      // window.history.pushState({ pageID: 'main' }, '', `/${link}`);
    }
  };
}
