import CompositeElement from './CompositeElement';

class P extends CompositeElement<HTMLParagraphElement> {
  protected renderElement(): void {
    this.rendered = document.createElement('p');
  }
}

export default P;
