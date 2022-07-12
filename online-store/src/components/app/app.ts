import { filters } from '../../index';
import { ICard } from '../../interface/types';
import { Cards } from '../view/card/cards';
import { Chain } from '../view/chain/chain';
import { Footer } from '../view/footer/footer';
import { Header } from '../view/header/header';
import { Products } from '../view/products/products';
import { Sort } from '../view/sort/sort';

const cardList: ICard[] = [
  {
    id: 'recZkNf2kwmdBcqd0',
    name: 'accent chair',
    price: 25999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160?ts=1656996717&userId=usrQMwWEPx18KgLcP&cs=26af48bd2f8596b0',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    company: 'marcos',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
  },
  {
    id: 'recEHmzvupvT8ZONH',
    name: 'albany sectional',
    price: 109999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52?ts=1656996717&userId=usrQMwWEPx18KgLcP&cs=f2a80a8169c9b8e4',
    colors: ['#000', '#ffb900'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'living room',
  },
  {
    id: 'rec5NBwZ5zCD9nfF0',
    name: 'albany table',
    price: 309999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f?ts=1656996717&userId=usrQMwWEPx18KgLcP&cs=9c389bc8efdbbbaf',
    colors: ['#ffb900', '#0000ff'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'kitchen',
  },
  {
    id: 'recd1jIVIEChmiwhe',
    name: 'armchair',
    price: 12599,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f?ts=1656996717&userId=usrQMwWEPx18KgLcP&cs=c020e1d68bf41e07',
    colors: ['#000', '#00ff00', '#0000ff'],
    company: 'marcos',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'bedroom',
  },
];
export class App {
  private rootElement: HTMLElement;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
  }

  public start(): void {
    const header: Header = new Header();
    header.draw();

    const main: HTMLElement = document.createElement('main');

    const chain: Chain = new Chain();
    chain.draw();

    const products: Products = new Products();
    products.draw();

    const footer: Footer = new Footer();
    footer.draw();

    main.append(chain.node, products.node);
    this.rootElement.append(header.node, main, footer.node);

    const sort: Sort = new Sort();
    sort.draw();

    const cards: Cards = new Cards();
    cards.draw(cardList);

    products.node.addEventListener('change', (e: Event) => {
      console.log(e.target);
      console.log(filters);
    });
  }
}
