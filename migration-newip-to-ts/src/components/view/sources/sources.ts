import { ISource } from '../../../interfaces/types';
import './sources.css';

class Sources {
  public draw(data: ISource[]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

    data.forEach((item: ISource) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      const sourceName = <HTMLSpanElement>sourceClone.querySelector('.source__item-name');
      sourceName.textContent = item.name;

      const sourceItem = <HTMLDivElement>sourceClone.querySelector('.source__item');
      sourceItem.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    const sourceContainer = <HTMLDivElement>document.querySelector('.sources');
    sourceContainer.append(fragment);
  }
}

export default Sources;
