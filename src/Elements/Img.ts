import LeafElement from './LeafElement';
import { Dictionary } from '../types';

class Img extends LeafElement<HTMLImageElement> {
  protected src: string;

  constructor(src: string, attributes: Dictionary = {}) {
    super(attributes);
    this.src = src;
  }

  public renderElement(): void {
    this.rendered = document.createElement('img');
    this.rendered.src = this.src;
  }
}

export default Img;
