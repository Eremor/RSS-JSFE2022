import { ICard } from '../../interface/types';
import { Controller } from '../controller/controller';
import { Cards } from './card/cards';
import { CategoryFilter } from './filters/categoryFilter';
import { ClearButton } from './filters/clearButton';
import { ColorsFilter } from './filters/colorsFilter';
import { CompanyFilter } from './filters/companyFilter';
import { PriceFilter } from './filters/priceFilter';
import { QueryFilter } from './filters/queryFilter';
import { Sort } from './sort/sort';

export class View {
  public draw = (controller: Controller, rootElement: HTMLElement): void => {
    const sort: Sort = new Sort();
    sort.draw();

    const filtersContainer = <HTMLDivElement>document.querySelector('.products__filters');
    filtersContainer.innerHTML = '';

    const queryFilter: QueryFilter = new QueryFilter();
    const categoryFilter: CategoryFilter = new CategoryFilter();
    const companyFilter: CompanyFilter = new CompanyFilter();
    const colorsFilter: ColorsFilter = new ColorsFilter();
    const priceFilter: PriceFilter = new PriceFilter();

    const clearButton: ClearButton = new ClearButton();

    filtersContainer.append(
      queryFilter.node,
      categoryFilter.node,
      companyFilter.node,
      colorsFilter.node,
      priceFilter.node,
      clearButton.node
    );

    const cards: Cards = new Cards();
    controller.getCards((data: ICard[]) => cards.draw(data, controller.filters));

    rootElement.addEventListener('input', () => {
      controller.getCards((data: ICard[]) => cards.draw(data, controller.filters));
    });

    document.addEventListener('filter', () => {
      controller.getCards((data: ICard[]) => cards.draw(data, controller.filters));
    });
  };
}
