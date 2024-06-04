export class BaseComponent<T extends HTMLElement> {
  public readonly node: T;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', classes: string[] = []) {
    this.node = <T>document.createElement(tag);
    this.node.classList.add(...classes);
  }
}
