import CompositeElement from './CompositeElement';

class Li extends CompositeElement<HTMLLIElement> {
  protected renderElement(): void {
    this.rendered = document.createElement('li');
  }
}

export default Li;
