import { ISource } from '../../../interfaces/types';
import './alphabet.css';

export class Alphabet {
  public draw(data: ISource[]): void {
    const sources = <HTMLDivElement>document.querySelector('.sources');

    const alphabetContainer: HTMLUListElement = document.createElement('ul');
    alphabetContainer.classList.add('source__alphabet');

    const alphabet: string[] = [];
    data.forEach((item: ISource) => {
      alphabet.push(item.id[0]);
    });

    [...new Set(alphabet)].forEach((item: string) => {
      const letter: HTMLLIElement = document.createElement('li');
      letter.classList.add('letter');
      letter.textContent = item;
      letter.setAttribute('data-letter', item);

      alphabetContainer.append(letter);
    });

    sources.insertBefore(alphabetContainer, sources.firstChild);
  }
}
