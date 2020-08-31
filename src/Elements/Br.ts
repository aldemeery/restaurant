import LeafElement from './LeafElement';

class Br extends LeafElement<HTMLBRElement> {
  constructor() {
    super({});
  }

  protected renderElement(): void {
    this.rendered = document.createElement('br');
  }
}

export default Br;
