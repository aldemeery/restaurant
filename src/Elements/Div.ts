import CompositeElement from './CompositeElement';

class Div extends CompositeElement<HTMLDivElement> {
  public renderElement(): void {
    this.rendered = document.createElement('div');
  }
}

export default Div;
