import { Wrapper } from '../../shared/wrapper';
import { BaseComponent } from '../baseComponent';
import { CategoryFilter } from '../filters/categoryFilter';
import { ClearButton } from '../filters/clearButton';
import { ColorsFilter } from '../filters/colorsFilter';
import { CompanyFilter } from '../filters/companyFilter';
import { QueryFilter } from '../filters/queryFilter';
import './products.scss';

export class Products extends BaseComponent {
  constructor() {
    super('section', ['products']);
  }

  public draw = (): void => {
    const wrapper: Wrapper = new Wrapper(['products__wrapper']);

    const filters: HTMLDivElement = document.createElement('div');
    filters.classList.add('products__filters', 'filters');

    const queryFilter: QueryFilter = new QueryFilter();
    const categoryFilter: CategoryFilter = new CategoryFilter();
    const companyFilter: CompanyFilter = new CompanyFilter();
    const colorsFilter: ColorsFilter = new ColorsFilter();

    const clearButton: ClearButton = new ClearButton();

    filters.append(queryFilter.node, categoryFilter.node, companyFilter.node, colorsFilter.node, clearButton.node);

    const field: HTMLDivElement = document.createElement('div');
    field.classList.add('products__field');

    const sort: HTMLDivElement = document.createElement('div');
    sort.classList.add('products__sort', 'sort');

    const sources: HTMLDivElement = document.createElement('div');
    sources.classList.add('products__sources', 'sources');

    field.append(sort, sources);
    wrapper.node.append(filters, field);
    this.node.append(wrapper.node);
  };
}
