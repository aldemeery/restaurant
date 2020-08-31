import CompositeElement from './CompositeElement';

class Span extends CompositeElement<HTMLSpanElement> {
  public renderElement(): void {
    this.rendered = document.createElement('span');
  }
}

export default Span;
