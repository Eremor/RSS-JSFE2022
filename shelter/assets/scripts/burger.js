export class Burger {
  constructor(navBar, burgerBtn) {
    this.navBar = navBar;
    this.burgerBtn = burgerBtn;
  }

  toggle = () => {
    this.navBar.classList.toggle('nav--open');
    this.burgerBtn.classList.toggle('burger--open');
    if(this.navBar.classList.contains('nav--open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }

  hideOnClick = (e) => {
    if(e.target.classList.contains('nav__link') || e.target.classList.contains('nav--open')) {
      this.toggle();
    }
  }
}