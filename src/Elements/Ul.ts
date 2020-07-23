import CompositeElement from './CompositeElement';

class Ul extends CompositeElement<HTMLUListElement> {
  protected renderElement(): void {
    this.rendered = document.createElement('ul');
  }
}

export default Ul;
