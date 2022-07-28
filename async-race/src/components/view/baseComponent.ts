export class BaseComponent<T> {
  public readonly node: HTMLElement | T;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', classes: string[] = []) {
    this.node = document.createElement(tag);
    this.node.classList.add(...classes);
  }
}
