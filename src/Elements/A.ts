import CompositeElement from './CompositeElement';
import { Dictionary } from '../types';

class A extends CompositeElement<HTMLAnchorElement> {
  private href: string;

  constructor(href: string, attributes: Dictionary = {}) {
    super(attributes);
    this.href = href;
  }

  protected renderElement(): void {
    this.rendered = document.createElement('a');
    this.rendered.href = this.href;
  }
}

export default A;
