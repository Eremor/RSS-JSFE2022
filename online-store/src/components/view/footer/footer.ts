import { Link } from '../../shared/link';
import { Wrapper } from '../../shared/wrapper';
import { BaseComponent } from '../baseComponent';
import './footer.scss';

export class Footer extends BaseComponent {
  constructor() {
    super('footer', ['footer']);
  }

  public draw = (): void => {
    const wrapper: Wrapper = new Wrapper(['footer__wrapper']);

    const github: Link = new Link(['footer__github'], 'Eremor', 'https://github.com/Eremor');
    github.node.setAttribute('target', '_blank');

    const copy: HTMLSpanElement = document.createElement('span');
    copy.innerHTML = '&copy; ';

    const span: HTMLSpanElement = document.createElement('span');
    span.textContent = 'MyKEA';

    const copyRight: HTMLParagraphElement = document.createElement('p');
    copyRight.classList.add('footer__copyright');
    copyRight.textContent = ' All rights reserved';
    copyRight.prepend(span);
    copyRight.prepend(copy);

    const rssLogo: Link = new Link(['footer__rss'], '', 'https://rs.school/js/');
    rssLogo.node.setAttribute('target', '_blank');

    wrapper.node.append(github.node, copyRight, rssLogo.node);
    this.node.append(wrapper.node);
  };
}
