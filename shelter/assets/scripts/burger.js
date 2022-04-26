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
    this.showLogo();
  }

  hideOnClick = (e) => {
    if(e.target.classList.contains('nav__link') || e.target.classList.contains('nav--open')) {
      this.toggle();
    }

    if(e.target.parentElement.classList.contains('nav__item--active')) {
      e.preventDefault();
      window.scrollTo(0, 0);
    }
  }

  showLogo = () => {
    const logo = document.querySelector('.header__logo');
    const newLogo = this.createBurgerLogo();
    console.log({logo, newLogo});

    if(this.navBar.classList.contains('nav--open')) {
      logo.classList.add('logo--hidden');
      this.navBar.append(newLogo);
    } else {
      logo.classList.remove('logo--hidden');
      // newLogo.remove();
      this.navBar.removeChild(this.navBar.lastElementChild);
    }
  }

  createBurgerLogo = () => {
    const title = document.createElement('h2');
    title.classList.add('logo__title');
    title.textContent = 'Cozy house';
    
    const subtitle = document.createElement('p');
    subtitle.classList.add('logo__subtitle');
    subtitle.textContent = 'Shelter for pets in Boston';
    
    const burgerLogo = document.createElement('div');
    burgerLogo.classList.add('logo', 'logo--burger')
    burgerLogo.append(title, subtitle);

    return burgerLogo;
  }
}