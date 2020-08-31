import CompositeElement from './CompositeElement';
import LeafElement from './LeafElement';

class I extends LeafElement<HTMLElement> {
  protected renderElement(): void {
    this.rendered = document.createElement('i');
  }
}

export default I;
