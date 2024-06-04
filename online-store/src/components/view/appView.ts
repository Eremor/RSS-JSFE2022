import { ICard } from '../../interface/types';
import { Controller } from '../controller/controller';
import { Cards } from './card/cards';
import { CategoryFilter } from './filters/categoryFilter';
import { ClearButton } from './filters/clearButton';
import { ColorsFilter } from './filters/colorsFilter';
import { CompanyFilter } from './filters/companyFilter';
import { PopularFilter } from './filters/popularFilter';
import { PriceFilter } from './filters/priceFilter';
import { QueryFilter } from './filters/queryFilter';
import { YearFilter } from './filters/yearFilter';
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
    const yearFilter: YearFilter = new YearFilter();
    const popularFilter: PopularFilter = new PopularFilter();

    const clearButton: ClearButton = new ClearButton();

    filtersContainer.append(
      queryFilter.node,
      categoryFilter.node,
      companyFilter.node,
      colorsFilter.node,
      priceFilter.node,
      yearFilter.node,
      popularFilter.node,
      clearButton.node
    );

    const cards: Cards = new Cards();
    controller.getCards((data: ICard[]) => cards.draw(data, controller.filters));

    rootElement.addEventListener('input', (): void => {
      controller.getCards((data: ICard[]) => cards.draw(data, controller.filters));
    });

    document.addEventListener('filter', (): void => {
      controller.getCards((data: ICard[]) => cards.draw(data, controller.filters));
    });
  };
}
