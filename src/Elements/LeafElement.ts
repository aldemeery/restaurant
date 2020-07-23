import Renderable from '../Interfaces/Renderable';
import { Dictionary } from '../types';

abstract class LeafElement<T extends Element> implements Renderable<Node> {
  protected rendered: T;

  protected attributes: Dictionary;

  constructor(attributes: Dictionary = {}) {
    this.attributes = attributes;
  }

  public render(): T {
    debugger;
    if (!this.rendered) {
      this.renderElement();
      this.renderAttriutes();
    }

    return this.rendered;
  }

  protected abstract renderElement(): void;

  protected renderAttriutes(): void {
    if (this.rendered) {
      for (const key in this.attributes) {
        if (Object.prototype.hasOwnProperty.call(this.attributes, key)) {
          const value = this.attributes[key];
          this.rendered.setAttribute(key, value);
        }
      }
    }
  }
}

export default LeafElement;
