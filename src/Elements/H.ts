import CompositeElement from './CompositeElement';
import { Dictionary } from '../types';

class H extends CompositeElement<HTMLHeadingElement> {
  protected size: number;

  constructor(size: number, attributes: Dictionary = {}) {
    if (size > 6 || size < 1) {
      throw new Error(`There is no such element as h${size}`);
    }

    super(attributes);
    this.size = size;
  }

  protected renderElement(): void {
    switch (this.size) {
      case 1:
        this.rendered = document.createElement('h1');
        break;
      case 2:
        this.rendered = document.createElement('h2');
        break;
      case 3:
        this.rendered = document.createElement('h3');
        break;
      case 4:
        this.rendered = document.createElement('h4');
        break;
      case 5:
        this.rendered = document.createElement('h5');
        break;
      case 6:
        this.rendered = document.createElement('h6');
        break;
      default:
        this.rendered = document.createElement('h1');
    }
  }
}

export default H;
